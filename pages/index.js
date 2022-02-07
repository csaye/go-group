import Header from '../components/Header';

import { getAuth, signOut } from 'firebase/auth';
import { signInWithGoogle } from '../util/signInWithGoogle';

import styles from '../styles/pages/Index.module.css';

export default function Index() {
  const auth = getAuth();

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.center}>
        <div className={styles.box}>
          <h1>GoGroup</h1>
          <p>Generate groups based on user preferences.</p>
          {
            auth.currentUser ?
            <button onClick={() => signOut(auth)}>
              Sign Out
            </button> :
            <button onClick={signInWithGoogle}>
              Sign in with Google
            </button>
          }
        </div>
      </div>
    </div>
  );
}
