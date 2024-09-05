import React from 'react';
import Header from '../../components/header';
import useTypedSelector from '../../auth/userLoggedIn';

const GetStarted: React.FC = () => {
  const isSignedIn = useTypedSelector((state) => state.user.isSignedIn);

  return (
    <div>
      <Header />
      {isSignedIn ? 'User is signed in' : 'User is not signed in'}
    </div>
  );
};

export default GetStarted;
