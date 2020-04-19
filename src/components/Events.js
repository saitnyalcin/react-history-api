import React from 'react';

const Events = ({ text, year }) => {
  return (
    <div>
      <p>
        {text} ({year})
      </p>
    </div>
  );
};

export default Events;
