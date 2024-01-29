/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-mono": "Roboto Mono, monospace",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
