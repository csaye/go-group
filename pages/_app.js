import Head from 'next/head';

import '../styles/globals.css'

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>GoGroup</title>
        <meta name="description" content="Generate groups based on user preferences." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
