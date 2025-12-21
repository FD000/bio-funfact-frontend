import React from 'react';
import '../App.css';


interface ProfilePageProps {
  importedProfile: any[];
}

const ProfilePage = (props: ProfilePageProps) => {

  console.log("ProfilePage importedProfile!!!!!!!!!:", props.importedProfile);
  return (
    <div>
      <div>
        <header >
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
            Learn Reactwwww
        </header>
      </div>
    </div>
  );
}

export default ProfilePage;