import Layout from '@/util/layout';
import { FC, useState } from 'react';
import SignupForm from './component/SignUpForm';
import SignInForm from './component/SignInForm';
import { fb, google } from '@/assets/icons';

import styles from './Auth.module.css';

interface AuthProps {}

const Auth: FC<AuthProps> = ({}) => {
  const [activeTab, setActiveTab] = useState('signup');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <div className={styles.auth}>
        <div className={styles.auth__container}>
          <div className={styles.auth__text}>
            <h1>
              Welcome to CareCircle
              <br /> Your gateway to seamless and personalized healthcare!
            </h1>
          </div>
          <div className={styles.auth__form}>
            <h1>{activeTab === 'signup' ? 'Sign Up' : 'Sign In'}</h1>
            {activeTab === 'signup' ? <SignupForm /> : <SignInForm />}

            <div className={styles.auth__option}>
              <div className={styles.cont}>
                <div />
                <p>or continue with</p>
                <div />
              </div>

              <div className={styles.auth__social}>
                <button className="google__auth">{google()}</button>
                <button className="fb__auth">{fb()}</button>
              </div>
            </div>

            <p>
              {activeTab === 'signup'
                ? 'Already have an account?'
                : "Don't have an account yet?"}{' '}
              <a
                onClick={() =>
                  handleTabChange(activeTab === 'signup' ? 'signin' : 'signup')
                }
              >
                {activeTab === 'signup' ? 'Sign In' : 'Sign Up'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
