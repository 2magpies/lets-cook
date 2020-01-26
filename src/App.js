import React, { useState, useEffect } from 'react';
import SiteInfo from './SiteInfo';
import DailyRecipe from './DailyRecipe';
import SuggestedPanel from './SuggestedPanel';
import './App.css';

const images = [
  {
    id: 52768,
    url: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg'
  },
  {
    id: 52893,
    url: 'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg'
  }
];

function App() {
  const searchOptions = {
    // key: process.env.REACT_APP_MEALDB_API_KEY,
    api: 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
    // endpoint: '/search'
  };
  return (
    <div>
      <SiteInfo />
      <DailyRecipe />
      <SuggestedPanel images={images} />
    </div>
  );
}

export default App;
