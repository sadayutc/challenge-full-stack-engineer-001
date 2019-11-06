import React, { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUser } from '../../contexts/userContext';

const Logout = () => {
  const {
    current: { logoutSuccess },
  } = useRef(useUser());

  useEffect(() => {
    toast('Until the next time');
    logoutSuccess();
  }, [logoutSuccess]);

  return <Redirect to="/" />;
};

export default Logout;
