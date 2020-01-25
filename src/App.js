import React, { useState, useEffect } from 'react';
import SiteInfo from './SiteInfo';
import DailyRecipe from './DailyRecipe';
import SuggestedPanel from './SuggestedPanel';
import './App.css';

function App() {
  return (
    <div>
      <SiteInfo />
      <DailyRecipe />
      <SuggestedPanel />
    </div>
  );
}

export default App;
