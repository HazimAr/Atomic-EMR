module.exports = {
  // 3x Faster refresh 5x Faster builds
  // Rust compiler
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/instagram",
        destination: "https://www.instagram.com/atomicemr",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://www.facebook.com/AtomicEMR",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/atomicemr",
        permanent: true,
      },
      {
        source: "/tiktok",
        destination: "https://www.tiktok.com/tag/AtomicEMR",
        permanent: true,
      },
    ];
  },
};
