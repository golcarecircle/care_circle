import Layout from '@/util/layout'
import { FC, useState } from 'react'
import SignupForm from './component/SignUpForm'
import SignInForm from './component/SignInForm'
import { fb, google } from '@/assets/icons'

import styles from './Auth.module.css'

interface AuthProps {}

const Auth: FC<AuthProps> = ({}) => {
  const [activeTab, setActiveTab] = useState("signup");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <div className={styles.auth}>
        <div className={styles.auth__container}>
          <div className={styles.auth__text}>
            <h1>
              Welcome to <span>CareCircle</span>
            </h1>
          </div>
          <div className={styles.auth__form}>
            <h1>
              {activeTab === "signup" ? "Sign Up" : "Sign In"}
            </h1>
            {activeTab === "signup" ? <SignupForm /> : <SignInForm />}

            <div className={styles.auth__option}>
              <p>
                or continue with
              </p>
              <div className={styles.auth__social}></div>
              <div className="google__auth">
                {google()}
              </div>
              <div className="fb__auth">
                {fb()}
              </div>
            </div>
            <p>
              {activeTab === "signup" ? "Already have an account?" : "Don't have an account yet?"}{" "}
              <button onClick={() => handleTabChange(activeTab === "signup" ? "signin" : "signup")}>
                {activeTab === "signup" ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
