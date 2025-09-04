module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./your-new-folder/**/*.{js,ts,jsx,tsx}", // ← Add this
  ],
  theme: {
    extend: {
    fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        roboto: ['var(--font-roboto)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
