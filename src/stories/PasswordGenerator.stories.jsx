import React from 'react';
import PasswordGenerator from '../components/PasswordGenerator';

export default {
  title: 'UI/PasswordGenerator',
  component: PasswordGenerator,
};

export const DefaultPasswordGenerator = (args) => {
  return <PasswordGenerator {...args} />;
};
