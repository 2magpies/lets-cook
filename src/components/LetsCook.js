import React from 'react';
import { Link } from 'react-router-dom';

function LetsCook(props) {
  // Destructure props object
  const { onClick } = props;
  return (
    <div>
      <h2>Ready to Cook?</h2>
      <button className="btn btn-primary">
        <Link
          to={`/`}
          style={{ textDecoration: 'none', color: 'var(--)' }}
        >
          Let's cook!
        </Link>
      </button>
    </div>
  );
}

export default LetsCook;
