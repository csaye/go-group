import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// opens google sign in popup
export default function signInWithGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
}
