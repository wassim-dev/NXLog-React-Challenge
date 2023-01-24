import TransferList from '../components/TransferList';
import React from 'react';

export default {
  title: 'UI/TransferList',
  component: TransferList,
  argTypes: {
    list: {
      type: 'array',
    },
  },
};

export const DefaultTransferList = (args) => {
  return <TransferList {...args} />;
};
