"use client";

import { useEffect } from "react";
import { STAGE_LEGACY_ANCHORS } from "@/lib/content/home";

const GUARD_KEY = "10to10:stage-hash-redirect";

/**
 * 옛 메인 앵커(10to10.kr/#estimate 등)로 들어오면 /stage의 같은 앵커로 보낸다 — 인쇄물 QR·가격 안내 카드·캡션 링크 보호.
 * 해시는 서버에 오지 않으므로 클라이언트에서 처리. 앵커 스크롤이 확실하도록 router가 아닌 전체 이동(location.replace).
 * 반복 방지: 예전 /stage → / 308(2026-08~11)을 캐시한 브라우저는 /stage로 보내도 다시 메인으로 돌아오므로, 10초 안에 또 오면 멈춤.
 */
export function StageHashRedirect() {
  useEffect(() => {
    // 옛 앵커는 모두 영문이라 해독할 필요가 없다 — 깨진 해시(#% 등)를 해독하다 메인 전체가 오류 화면이 되는 일을 막음
    const id = window.location.hash.slice(1);
    if (!(STAGE_LEGACY_ANCHORS as readonly string[]).includes(id)) return;
    try {
      const last = Number(window.sessionStorage.getItem(GUARD_KEY) ?? 0);
      if (Date.now() - last < 10_000) return;
      window.sessionStorage.setItem(GUARD_KEY, String(Date.now()));
    } catch {
      // 저장소를 못 쓰는 환경(일부 사생활 보호 모드)에서도 이동은 한다
    }
    window.location.replace(`/stage${window.location.search}#${id}`);
  }, []);
  return null;
}
