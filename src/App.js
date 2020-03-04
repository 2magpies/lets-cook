import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import SiteInfo from './components/randomDish/SiteInfo';
// import './App.css';
import './Stylesheet.css';
import Home from './components/randomDish/Home';
import FeaturedDrink from './components/randomDrink/FeaturedDrink';
// import LoginModal from './components/search/LoginModal';

function App() {
  return (
    <div className="grid">
      <section>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Header className="banner" />
        </Link>
        {/* <SiteInfo /> */}
      </section>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/drink" component={FeaturedDrink}></Route>
          {/* <Route path="/login" component={LoginModal}></Route> */}
        </Switch>
      </main>
      {/* <footer>Photo by Lukas Blazek on Unsplash</footer> */}
    </div>
  );
}
export default App;

//Qusai helped me refactor components to support react-router-dom so I could create a separate view for search feature (formerly all of the code in Home component was on App.js)
