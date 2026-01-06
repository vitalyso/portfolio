const title = "vitaly | product engineer";
const image = "https://vitaly.so/meta.jpg";
const description =
  "Senior full-stack developer (React & Node.js) focused on product engineering. I solve technical problems and balance shipping fast with building right. 10+ years building maintainable products.";

export function MetaTags() {
  return (
    <>
      <meta name="description" content={description} />

      <meta property="og:url" content="https://vitaly.so" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vitaly_so" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content="https://vitaly.so" />
    </>
  );
}
