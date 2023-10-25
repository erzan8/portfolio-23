import Head from "next/head";
export default function MetaHead() {
  return (
    <Head>
      <meta charset="utf-8" />
      <title>Portfolio Développeur - Guilhem Carron</title>
      <meta
        name="description"
        content="Développeur fullstack javascript, disponible pour tous vos projets d'application web."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        property="og:title"
        content="Portfolio - Guilhem Carron"
        key="title"
      />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
