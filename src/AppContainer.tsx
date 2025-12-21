import React, { useState } from 'react';
import LoginPage from './pages/loginPage';
import LandingPage from './pages/LandingPage';

interface Profile {
  accountId: string;
  accountName: string;
  message: string;
}

const AppContainer = () => {
  const [showLogin, setShowLogin] = useState(true); // true → show login first
  const [profile, setProfile] = useState<Profile | null>(null); // profile is an object

  console.log("AppContainer profile:", profile);
  console.log("AppContainer showLogin:", showLogin);

  return (
    <>
      {showLogin ? (
        <LoginPage 
          login={showLogin} 
          setLogin={setShowLogin} 
          profile={profile} 
          setProfile={setProfile} 
        />
      ) : (
        <LandingPage disableCustomTheme={false} profile={profile} />
      )}
    </>
  );
};

export default AppContainer;
