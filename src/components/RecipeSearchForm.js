import React from 'react';

function RecipeSearchForm(props) {
  // Destructure props object
  const { handleSubmit, handleChange, searchString } = props;
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <input
        placeholder="Search by FIRST letter"
        type="text"
        name="searchString"
        required
        onChange={handleChange}
        value={searchString}
      />
      <p>
        Type the first letter of your recipe; then, click the Search button.
      </p>
      <button type="submit">Search</button>
    </form>
  );
}

export default RecipeSearchForm;
// Referred to Giphy-Searcher by Jennifer Meade
