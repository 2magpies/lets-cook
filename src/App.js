import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import SiteInfo from './components/SiteInfo';

import './App.css';
import SearchPage from './components/SearchPage';
import Home from './components/Home';

function App() {
  return (
    <div className="grid">
      <section>
        <Header className="banner" />
        <SiteInfo />
      </section>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchPage}></Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;
