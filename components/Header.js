import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/components/Header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
      <Image src="/logo.png" width="48" height="48" />
      <h1>GoGroup</h1>
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/generate">
        <a className={styles.link}>Generate</a>
      </Link>
    </div>
  );
}
