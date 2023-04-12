import { FC, useState } from 'react';
import styles from './settings.module.css';
import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';

interface SettingsProps {}

const Settings: FC<SettingsProps> = ({}) => {
  const { data: session } = useSession();
  const [name, setName] = useState(session?.user?.name || '');
  const [email, setEmail] = useState(session?.user?.email || '');
  const [allergies, setAllergies] = useState('');
  const [lifeCondition, setLifeCondition] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [isSmoker, setIsSmoker] = useState(false);
  const [familyDetails, setFamilyDetails] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Code to update user's settings goes here
  };
  return (
    <div className={styles.settings}>
      <div className={styles.settings__container}>
        <h1>Settings</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.form__group}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <h2>Medical History</h2>
          <div className={styles.form__group}>
            <label htmlFor="allergies">Allergies:</label>
            <textarea
              id="allergies"
              value={allergies}
              onChange={(event) => setAllergies(event.target.value)}
            />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="lifeCondition">Life Condition:</label>
            <textarea
              id="lifeCondition"
              value={lifeCondition}
              onChange={(event) => setLifeCondition(event.target.value)}
            />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="emergencyContact">Emergency Contact:</label>
            <input
              type="text"
              id="emergencyContact"
              value={emergencyContact}
              onChange={(event) => setEmergencyContact(event.target.value)}
            />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="isSmoker">Are you a smoker?</label>
            <input
              type="checkbox"
              id="isSmoker"
              checked={isSmoker}
              onChange={(event) => setIsSmoker(event.target.checked)}
            />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="familyDetails">Family Details:</label>
            <textarea
              id="familyDetails"
              value={familyDetails}
              onChange={(event) => setFamilyDetails(event.target.value)}
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
