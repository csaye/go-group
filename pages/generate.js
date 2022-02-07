import Header from '../components/Header';

import { useEffect, useState } from 'react';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

import styles from '../styles/pages/Generate.module.css';

export default function Generate() {
  const [persons, setPersons] = useState(undefined);

  const db = getFirestore();

  // gets persons from firebase
  async function getPersons() {
    const personsRef = collection(db, 'persons');
    const personsDocs = await getDocs(personsRef);
    setPersons(personsDocs.docs.map(doc => doc.data()));
  }

  // get persons on start
  useEffect(() => {
    getPersons();
  }, []);

  return (
    <div>
      <Header />
      <div>
        {
          persons &&
          persons.map((person, i) =>
            <div key={i}>
              <p>{person.name}</p>
            </div>
          )
        }
      </div>
    </div>
  );
}
