import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next LinkedIn bio in seconds."
          />
          <meta property="og:site_name" content="linkedinbio.sreeharik.com" />
          <meta
            property="og:description"
            content="Generate your next LinkedIn bio in seconds."
          />
          <meta property="og:title" content="LinkedIn Bio Generator" />
          <meta name="linkedin:card" content="summary_large_image" />
          <meta name="linkedin:title" content="LinkedIn Bio Generator" />
          <meta
            name="linkedin:description"
            content="Generate your next LinkedIn bio in seconds."
          />
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
