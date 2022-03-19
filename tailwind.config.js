module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tweet": "#1d9bf0",
        "tweet-active": "#1a8cd8",
        "relevant": "#16181c",
        "relevant-active": "#1d1f23",
        "loading-outer": "#1d9bf0",
        "loading-inner": "#061e2f",
        "retweet-outer": "#071a14",
        "retweet-inner": "#05422e",
        "liked-outer": "#210a14",
        "liked-inner": "#ec1779"
      }
    },
  },
  plugins: [],
}