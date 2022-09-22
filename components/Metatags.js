export default function MetaTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Dutch Who Design" />
      <meta
        name="description"
        content="A repository to celebrate the work of talented Dutch designers and showcase it to the world."
      />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://dutchswho.design" />
      <meta property="og:title" content="Dutch Who Design" />
      <meta
        property="og:description"
        content="A repository to celebrate the work of talented Dutch designers and showcase it to the world."
      />
      <meta
        property="og:image"
        content="http://dutchswho.design/img/preview.png"
      />

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://Dutchswho.design" />
      <meta property="twitter:title" content="Dutch Who Design" />
      <meta
        property="twitter:description"
        content="A repository to celebrate the work of talented Dutch designers and showcase it to the world."
      />
      <meta
        property="twitter:image"
        content="http://Dutchswho.design/img/preview.png"
      />
    </>
  );
}
