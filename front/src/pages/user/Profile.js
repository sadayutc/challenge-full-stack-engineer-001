import React, { useEffect, useRef } from 'react';
import { useLayout } from '../../contexts/layoutContext';

const Profile = () => {
  const { current: { setHeaderTitle }} = useRef(useLayout());

  useEffect(() => {
    setHeaderTitle('Profile');
  }, [setHeaderTitle]);

  return <div>THIS IS PROFILE</div>;
};

export default Profile;
