import React from 'react';
import { Link } from 'react-router-dom';

function LetsDrink(props) {
  // Destructure props object
  const { onClick } = props;
  return (
    <div>
      <h2>Want to see our Featured drink?</h2>
      <button>
        <Link
          to={`/drink`}
          style={{ textDecoration: 'none', color: 'var(--)' }}
        >
          Let's drink!
        </Link>
      </button>
    </div>
  );
}

export default LetsDrink;
