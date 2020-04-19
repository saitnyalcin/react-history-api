import React from 'react';

const Births = ({ text, year }) => {
  return (
    <div>
      <p>
        {text} ({year})
      </p>
    </div>
  );
};

export default Births;
