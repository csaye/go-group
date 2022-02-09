import { useState, useEffect } from 'react';
import styles from '../styles/components/Main.module.css';

export default function Main(props) {
  const { Component, pageProps } = props;

  const [authed, setAuthed] = useState(false);

  return (
    <Component
      authed={authed}
      {...pageProps}
    />
  );
}
