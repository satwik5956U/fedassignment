import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {BrowserRouter as Router,Switch} from 'react-router-dom'
import Main from "../components/Main";

const Home = () => {
  return (
    <Router>
    <div className="wrapper">
      <Header />
      <Switch>
        <Route path='/home' component={Main} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
};

export default Home;
