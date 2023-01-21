export default function MetaTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Argentinians Who Design" />
      <meta
        name="description"
        content="A repository to celebrate the work of talented Argentinian designers and showcase it to the world."
      />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://argentinianswho.design" />
      <meta property="og:title" content="Argentinians Who Design" />
      <meta
        property="og:description"
        content="A repository of talented Argentinian designers."
      />
      <meta
        property="og:image"
        content="https://argentinianswho.design/img/preview.png"
      />

      <meta
        name="theme-color"
        content="#fff"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#111"
        media="(prefers-color-scheme: dark)"
      />

      {/* Facebook Meta Tags */}
      <meta
        property="og:url"
        content="https://argentinians-who-design.vercel.app/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Argentinians Who Design" />
      <meta
        property="og:description"
        content="A repository of talented Argentinian designers."
      />
      <meta
        property="og:image"
        content="https://argentinianswho.design/img/preview.png"
      />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content="argentinians-who-design.vercel.app"
      />
      <meta
        property="twitter:url"
        content="https://argentinians-who-design.vercel.app/"
      />
      <meta name="twitter:title" content="Argentinians Who Design" />
      <meta
        name="twitter:description"
        content="A repository of talented Argentinian designers."
      />
      <meta
        name="twitter:image"
        content="https://argentinianswho.design/img/preview.png"
      />
    </>
  );
}
