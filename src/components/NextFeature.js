import React from 'react';

function NextFeature(props) {
  // Destructure props object
  const { handleNext } = props;
  return (
      <div>
          <h2>In the mood for something else?</h2>
    <form onSubmit={handleNext}>
      <button type="submit">Show me another Featured Dish!</button>
    </form>
      </div>
  );
}

export default NextFeature;
