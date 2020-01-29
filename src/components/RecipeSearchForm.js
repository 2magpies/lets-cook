import React from 'react';
import { SearchIcon } from '../shared/AppIcons';

function RecipeSearchForm(props) {
  // Destructure props object
  const { handleSubmit, handleChange, searchString } = props;
  return (
    <div className="child">
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
    </div>
  );
}

export default RecipeSearchForm;
