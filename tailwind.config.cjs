// tailwind.config.js
const isProduction = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV
module.exports = {
  // only needed in Tailwind 1.0 for tailwind 2.0 compat
  // future: {
  //     purgeLayersByDefault: true,
  //     removeDeprecatedGapUtilities: true,
  //   },
  purge:  [
      "./src/**/*.svelte",
      // may also want to include HTML files
      "./src/**/*.html"
    ],
  plugins: [
    require('@tailwindcss/typography'),
  ]
};
