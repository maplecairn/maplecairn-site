import { ImageResponse } from "next/og";

export const alt = "Maple Cairn, Canadian personal finance and build log";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Google Fonts serves TTF (which satori needs) when fetched with an old UA;
// the default CSS returns woff2, which satori can't parse. Returns null on any
// failure so the image still renders in the fallback font.
async function loadFraunces(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600",
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; rv:6.0)" } },
    ).then((r) => r.text());
    const url = css.match(/src:\s*url\((https:[^)]+\.ttf)\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const fraunces = await loadFraunces();
  const cairn = [70, 124, 168, 208];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#faf7f2",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <span
            style={{
              color: "#a8332a",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Made in Canada
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
            <div
              style={{
                fontFamily: fraunces ? "Fraunces" : "serif",
                fontSize: 108,
                fontWeight: 600,
                color: "#1a1a1a",
                lineHeight: 1,
              }}
            >
              Maple Cairn
            </div>
            <div style={{ fontSize: 38, color: "#5a544a", marginTop: 26, lineHeight: 1.35 }}>
              Canadian personal finance for self-employed builders. Real numbers, no fluff.
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            {cairn.map((w, i) => (
              <div
                key={i}
                style={{ width: w, height: 46, borderRadius: 24, backgroundColor: "#a8332a" }}
              />
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 30, fontWeight: 600, color: "#a8332a" }}>maplecairn.ca</span>
          <span style={{ fontSize: 26, color: "#8a8275" }}>Sole Prop Stack · Build Log</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fraunces
        ? [{ name: "Fraunces", data: fraunces, style: "normal", weight: 600 }]
        : [],
    },
  );
}
