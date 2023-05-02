import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // we can add metadata that applys to all the pages, in this file
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scalue-1' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
