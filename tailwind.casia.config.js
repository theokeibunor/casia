/** The site (every page → css/casia.css). The theme is the November 2026
 *  design mock-up's, copied as-is so every page matches it.
 *  Build: npm run build:site */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-variant": "#31353f", "surface-dim": "#0f131c", "on-secondary-fixed-variant": "#005236",
        "tertiary-fixed": "#ffddb8", "on-primary-fixed": "#07006c", "primary": "#c0c1ff", "on-background": "#dfe2ef",
        "secondary-container": "#00a572", "error-container": "#93000a", "on-primary-container": "#0d0096",
        "primary-container": "#8083ff", "outline-variant": "#464554", "error": "#ffb4ab", "on-primary-fixed-variant": "#2f2ebe",
        "surface-container-low": "#181b25", "inverse-primary": "#494bd6", "surface-tint": "#c0c1ff", "secondary-fixed-dim": "#4edea3",
        "on-surface": "#dfe2ef", "on-error-container": "#ffdad6", "background": "#0f131c", "on-tertiary-fixed": "#2a1700",
        "on-surface-variant": "#c7c4d7", "outline": "#908fa0", "surface-container-high": "#262a34", "primary-fixed": "#e1e0ff",
        "on-primary": "#1000a9", "surface": "#0f131c", "tertiary-container": "#ca8100", "surface-container": "#1c1f29",
        "on-secondary-container": "#00311f", "inverse-surface": "#dfe2ef", "surface-bright": "#353943",
        "surface-container-lowest": "#0a0e17", "on-tertiary": "#472a00", "on-error": "#690005", "secondary": "#4edea3",
        "tertiary": "#ffb95f", "on-tertiary-container": "#3e2400", "on-secondary-fixed": "#002113", "secondary-fixed": "#6ffbbe",
        "on-tertiary-fixed-variant": "#653e00", "on-secondary": "#003824", "primary-fixed-dim": "#c0c1ff",
        "surface-container-highest": "#31353f", "inverse-on-surface": "#2c303a", "tertiary-fixed-dim": "#ffb95f"
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: {
        "space-2xl": "4rem", "space-3xl": "6rem", "gutter-mobile": "1rem", "margin-mobile": "1.25rem", "margin": "2rem",
        "space-md": "1rem", "gutter": "1.5rem", "space-lg": "1.5rem", "space-xl": "2.5rem", "space-xs": "0.25rem", "space-sm": "0.5rem"
      },
      fontFamily: {
        "metric-display": ["Plus Jakarta Sans"], "display-mobile": ["Plus Jakarta Sans"], "body-sm": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"], "headline-lg-mobile": ["Plus Jakarta Sans"], "headline-sm": ["Plus Jakarta Sans"],
        "label-caps": ["Geist"], "headline-md": ["Plus Jakarta Sans"], "body-lg": ["Plus Jakarta Sans"], "body-md": ["Plus Jakarta Sans"],
        "display": ["Plus Jakarta Sans"], "label-code": ["Geist"]
      },
      fontSize: {
        "metric-display": ["48px", { lineHeight: "52px", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "body-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        "headline-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.025em", fontWeight: "700" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "label-caps": ["11px", { lineHeight: "14px", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-md": ["28px", { lineHeight: "36px", letterSpacing: "-0.015em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["15px", { lineHeight: "24px", fontWeight: "400" }],
        "display": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "800" }],
        "label-code": ["12px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "500" }]
      }
    }
  },
  plugins: []
};
