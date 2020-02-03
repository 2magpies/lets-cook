import React from 'react';
import { Link } from 'react-router-dom';

function LetsDrink(props) {
  // Destructure props object
  const { onClick } = props;
  return (
    <div className="favorite-form">
      <h2>Ready to Drink?</h2>
      <button>
        <Link
          to={`/drink`}
          // Hou comment: consider moving CSS to a separate file
          style={{ textDecoration: 'none', color: 'var(--)' }}
        >
          Let's drink!
        </Link>
      </button>
    </div>
  );
}

export default LetsDrink;
//Sage helped me with link
