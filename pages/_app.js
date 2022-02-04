import Head from 'next/head';

import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../util/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

import '../styles/globals.css'

// initialize firebase
if (!getApps().length) initializeApp(firebaseConfig);

export default function App(props) {
  const { Component, pageProps } = props;

  // listen for auth
  const auth = getAuth();
  useAuthState(auth);

  return (
    <>
      <Head>
        <title>GoGroup</title>
        <meta name="description" content="Generate groups based on user preferences." />
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
