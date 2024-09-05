import React from 'react';
import useTypedSelector from '../../auth/userLoggedIn';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../../utils/routes';

const Portal: React.FC = () => {
  const isSignedIn = useTypedSelector((state) => state.user.isSignedIn);

  if (isSignedIn) {
    return <Navigate to={AppRoutes.home} replace />;
  } else {
    return <Navigate to={AppRoutes.login} replace/>
  }

  return <div>{/* Portal content goes here */}</div>;
};

export default Portal;
