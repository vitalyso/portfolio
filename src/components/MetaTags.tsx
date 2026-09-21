const siteUrl = "https://sivkoff.com";
const title = "vitaly | product engineer";
const image = `${siteUrl}/me.webp`;
const description =
  "Senior full-stack developer (React & Node.js) focused on product engineering. I solve technical problems and balance shipping fast with building right. 10+ years building maintainable products.";

export function MetaTags() {
  return (
    <>
      <link rel="canonical" href={siteUrl} />
      <meta name="description" content={description} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vitaly_so" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={siteUrl} />
    </>
  );
}
