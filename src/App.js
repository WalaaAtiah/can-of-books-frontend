import React from 'react';
import Header from './header/Header';
import Footer from './Footer';
import BestBooks from './bestbooks/BestBooks';
import About from './About';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
            </Route> 
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route 
              exact path="/About"
              element={<About />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
       
      </>
    )
  }
}

export default App;
