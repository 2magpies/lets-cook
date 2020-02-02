import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import SiteInfo from './components/SiteInfo';
import './App.css';
import Home from './components/Home';
import FeaturedDrink from './components/FeaturedDrink';

function App() {
  return (
    <div className="grid">
      <section>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Header className="banner" />
        </Link>
        <SiteInfo />
      </section>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/drink" component={FeaturedDrink}></Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;

//Qusai helped me refactor components to support react-router-dom so I could create a separate view for search feature (formerly all of the code in Home component was on App.js)
