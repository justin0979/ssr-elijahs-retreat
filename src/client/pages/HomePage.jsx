import React from 'react';
import Button from 'components/Button';

const HomePage = () => {
  return (
    <div>
      <p>Home Page</p>
      <Button
        text="click"
        renderBtn={() => console.log('clicked in HomePage')}
        cn="btn"
      />
    </div>
  );
};

export default {
  component: HomePage
};
