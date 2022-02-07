import Header from '../components/Header';

import styles from '../styles/pages/Generate.module.css';

export default function Generate() {
  const [persons, setPersons] = useState(undefined);

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
