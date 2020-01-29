import React from 'react';

function NextFeature(props) {
  // Destructure props object
  const { handleNext } = props;
  return (
    <form onSubmit={handleNext}>
          <h2>In the mood for something else?</h2>
      <button type="submit">Show me another Featured Dish!</button>
    </form>
  );
}

export default NextFeature;
