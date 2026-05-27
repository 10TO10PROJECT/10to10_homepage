import { ImageResponse } from "next/og";

export const alt = "10to10 — 동네 학원의 모든 것";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #FFFFFF 0%, #F5FBF9 60%, #E6F9F3 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #50E3C2 0%, #15BDFF 100%)",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "40px",
              fontWeight: 800,
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
            }}
          >
            10to10
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "76px",
            fontWeight: 800,
            color: "#1A1A1A",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          동네 학원의 모든 것, 10to10이 바꿉니다.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "28px",
            color: "#4A4A4A",
            letterSpacing: "-0.01em",
          }}
        >
          AI 플랫폼 + 운영 파트너십 · 학원·학부모·학생을 잇다
        </div>
      </div>
    ),
    { ...size },
  );
}
