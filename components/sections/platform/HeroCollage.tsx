import Image from "next/image";
import { PLATFORM_HERO_COLLAGE } from "@/lib/content/platform";

const COPIES = 4; // 열마다 목록을 4번 이어 붙이고 -25%(한 벌 높이)만큼 흘려 이음매 없이 반복
const DRIFT = ["drift-up 120s", "drift-down 140s", "drift-up 130s"];

/** 히어로 배경 — 실제 설명회 현장·포스터가 기울어진 세 열로 천천히 흐르는 콜라주. 장식이라 스크린리더에서 숨김 */
export function HeroCollage() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-[30%] -right-[18%] flex h-[90%] w-[125%] rotate-[-8deg] gap-3 opacity-45 saturate-[0.8] sm:gap-4 lg:-top-[20%] lg:-right-[4%] lg:h-[150%] lg:w-[64%]">
        {PLATFORM_HERO_COLLAGE.map((col, i) => (
          <div key={i} className="flex-1 overflow-hidden">
            <div style={{ animation: `${DRIFT[i]} linear infinite` }}>
              {Array.from({ length: COPIES }, () => col)
                .flat()
                .map((t, j) => (
                  <div key={j} className="pb-3 sm:pb-4">
                    <div
                      className="relative w-full overflow-hidden rounded-[var(--radius-img)] bg-white shadow-card"
                      style={{ aspectRatio: `${t.w} / ${t.h}` }}
                    >
                      <Image src={t.src} alt="" fill sizes="(min-width: 1024px) 300px, 40vw" className="object-cover" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      {/* 글자 쪽은 진하게 덮고 오른쪽으로 갈수록 사진이 비치도록 */}
      <div className="absolute inset-0 bg-[#F3FCF9]/85 lg:hidden" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#F3FCF9_0%,rgba(243,252,249,0.96)_42%,rgba(243,252,249,0.62)_62%,rgba(243,252,249,0.4)_100%)] lg:block" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0),#FFFFFF)]" />
    </div>
  );
}
