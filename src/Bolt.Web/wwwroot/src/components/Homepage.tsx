import Title from 'antd/lib/typography/Title';
import React, { FC } from 'react';
import RestaurantsList from './RestaurantsList';

const Homepage: FC = () => {
  return (
    <>
      <Title>What&apos;s for dinner tonight?</Title>
      <RestaurantsList />
    </>
  );
};

export default Homepage;
