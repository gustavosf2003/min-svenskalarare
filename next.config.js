const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  //accept all images
  images: {
    domains: ["*"],
  },
});
module.exports = withBundleAnalyzer({});
