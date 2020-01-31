import React from 'react';
import { Link } from 'react-router-dom';

function FindFavorite(props) {
  // Destructure props object
  const { onClick } = props;
  return (
    <div>
      <h2>Looking for a Favorite Dish?</h2>
      <button>
        <Link to={`/search`}>Let me search!</Link>
      </button>
    </div>
  );
}

export default FindFavorite;

//Sage helped me with link
