import React from 'react';

function DailyRecipe() {
  return (
    <form className="form-horizontal">
      <input placeholder="Search" type="text" name="searchString" required />
      <button type="submit">Search</button>
    </form>
  );
}

export default DailyRecipe;
