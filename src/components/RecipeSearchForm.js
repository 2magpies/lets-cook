import React from 'react';

function RecipeSearchForm(props) {
  // Destructure props object
  const { handleSubmit, handleChange, searchString } = props;
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <input
        placeholder="Search by first letter"
        type="text"
        name="searchString"
        required
        onChange={handleChange}
        value={searchString}
      />
      <button type="submit">Find me a recipe!</button>
    </form>
  );
}

export default RecipeSearchForm;
