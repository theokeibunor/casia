/** The site (every page → css/casia.css). The theme is the November 2026
 *  design mock-up's, copied as-is so every page matches it.
 *  Build: npm run build:site */
module.exports = {
  content: ["./*.html"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        /* Values live in css/casia.input.css: dark by default, light when the
           visitor's system asks for it. */
        "background": "rgb(var(--c-background) / <alpha-value>)", "error": "rgb(var(--c-error) / <alpha-value>)", "error-container": "rgb(var(--c-error-container) / <alpha-value>)", "inverse-on-surface": "rgb(var(--c-inverse-on-surface) / <alpha-value>)", "inverse-primary": "rgb(var(--c-inverse-primary) / <alpha-value>)", "inverse-surface": "rgb(var(--c-inverse-surface) / <alpha-value>)", "on-background": "rgb(var(--c-on-background) / <alpha-value>)", "on-error": "rgb(var(--c-on-error) / <alpha-value>)", "on-error-container": "rgb(var(--c-on-error-container) / <alpha-value>)", "on-primary": "rgb(var(--c-on-primary) / <alpha-value>)", "on-primary-container": "rgb(var(--c-on-primary-container) / <alpha-value>)", "on-primary-fixed": "rgb(var(--c-on-primary-fixed) / <alpha-value>)", "on-primary-fixed-variant": "rgb(var(--c-on-primary-fixed-variant) / <alpha-value>)", "on-secondary": "rgb(var(--c-on-secondary) / <alpha-value>)", "on-secondary-container": "rgb(var(--c-on-secondary-container) / <alpha-value>)", "on-secondary-fixed": "rgb(var(--c-on-secondary-fixed) / <alpha-value>)", "on-secondary-fixed-variant": "rgb(var(--c-on-secondary-fixed-variant) / <alpha-value>)", "on-surface": "rgb(var(--c-on-surface) / <alpha-value>)", "on-surface-variant": "rgb(var(--c-on-surface-variant) / <alpha-value>)", "on-tertiary": "rgb(var(--c-on-tertiary) / <alpha-value>)", "on-tertiary-container": "rgb(var(--c-on-tertiary-container) / <alpha-value>)", "on-tertiary-fixed": "rgb(var(--c-on-tertiary-fixed) / <alpha-value>)", "on-tertiary-fixed-variant": "rgb(var(--c-on-tertiary-fixed-variant) / <alpha-value>)", "outline": "rgb(var(--c-outline) / <alpha-value>)", "outline-variant": "rgb(var(--c-outline-variant) / <alpha-value>)", "primary": "rgb(var(--c-primary) / <alpha-value>)", "primary-container": "rgb(var(--c-primary-container) / <alpha-value>)", "primary-fixed": "rgb(var(--c-primary-fixed) / <alpha-value>)", "primary-fixed-dim": "rgb(var(--c-primary-fixed-dim) / <alpha-value>)", "secondary": "rgb(var(--c-secondary) / <alpha-value>)", "secondary-container": "rgb(var(--c-secondary-container) / <alpha-value>)", "secondary-fixed": "rgb(var(--c-secondary-fixed) / <alpha-value>)", "secondary-fixed-dim": "rgb(var(--c-secondary-fixed-dim) / <alpha-value>)", "surface": "rgb(var(--c-surface) / <alpha-value>)", "surface-bright": "rgb(var(--c-surface-bright) / <alpha-value>)", "surface-container": "rgb(var(--c-surface-container) / <alpha-value>)", "surface-container-high": "rgb(var(--c-surface-container-high) / <alpha-value>)", "surface-container-highest": "rgb(var(--c-surface-container-highest) / <alpha-value>)", "surface-container-low": "rgb(var(--c-surface-container-low) / <alpha-value>)", "surface-container-lowest": "rgb(var(--c-surface-container-lowest) / <alpha-value>)", "surface-dim": "rgb(var(--c-surface-dim) / <alpha-value>)", "surface-tint": "rgb(var(--c-surface-tint) / <alpha-value>)", "surface-variant": "rgb(var(--c-surface-variant) / <alpha-value>)", "tertiary": "rgb(var(--c-tertiary) / <alpha-value>)", "tertiary-container": "rgb(var(--c-tertiary-container) / <alpha-value>)", "tertiary-fixed": "rgb(var(--c-tertiary-fixed) / <alpha-value>)", "tertiary-fixed-dim": "rgb(var(--c-tertiary-fixed-dim) / <alpha-value>)"
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
