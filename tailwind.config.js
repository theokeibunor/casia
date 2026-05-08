/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"]
            },
            keyframes: {
                "bounce-slow": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-6px)" }
                }
            },
            animation: {
                "bounce-slow": "bounce-slow 4s ease-in-out infinite"
            }
        }
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("tailwindcss-animate")
    ]
};
