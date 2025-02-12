/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontSize: {
            xxs: "10px",
            xs: "12px",
            sm: "14px",
            base: "16px",
            lg: "18px",
            "2xl": "24px",
        },
        extend: {
            keyframes: {
                logo: {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(359deg)" },
                },
            },
            bgGradientDeg: {
                40: "40deg",
            },
            animation: {
                logo: "logo 6s infinite linear",
            },
            boxShadow: {
                innerBall: "inset -5px -5px 6px #FFFFFF, inset 5px 5px 6px #E5E7EB",
                outerBall: "-4px -4px 6px #fefefe, 4px 4px 6px #E5E7EB",
                lightBlur: "5px 5px 25px 0px #2222221A",
            },
            dropShadow: {
                darker: "5px 5px 25px rgba(34, 38, 119, 0.25)",
                innerDarker: "inset 5px 5px 25px rgba(34, 38, 119, 0.25)",
            },
            colors: {
                lightPink: "#FFBBC1",
                red1: "#ff6f77",
                red2: "#ff3334",
                red3: "#C00000",
                red4: "#ff6f77",
                red5: "#ff6f77",
                piggyPink: "#FFDEE3",
                tulip: "#FF8896",
                daatgalSuccess: "#06ba63",
                hipaySuccess: "#06BA63",
                successShade: "#06BA631A",
                error: "#EB4511",
                primary: "#0048A6",
                hipay: "#ff3b63",
                black0: "#ffffff",
                black10: "#f5f7fa",
                black25: "#e5e7eb",
                black30: "#d9d9d9",
                black40: "#9CA5B0",
                black70: "#414C58",
                black55: "#646E7B",
                black85: "#353F4A",
                black100: "#212932",
                daatgalBlue: "#0063D7",
                daatgalBlue2: "#2B91EF",
                daatgalOrange2: "#2DA523",
                hipayAlert: "#FFB140",
                ballGradient:
                    "radial-gradient(63.67% 61.25% at 36.25% 21.25%, #FFFFFF 0%, #DBE3EF 100%)",
                yellow: "#FFB300",
                orange: "#FF5D35",
                orange50: "#FF5D3580",
                red: "#F7003A",
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
};
