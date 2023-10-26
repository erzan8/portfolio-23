/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="Développeur fullstack javascript, disponible pour tous vos projets d'application web."
          />
          <meta
            property="og:title"
            content="Portfolio - Guilhem Carron"
            key="title"
          />
          <meta name="robots" content="index,follow" />
          <meta name="application-name" content="Guilhem Carron" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Guilhem Carron" />
          <meta name="theme-color" content="#000" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
