import React from 'react';
import Header from './header/Header';
import Footer from './Footer';
import BestBooks from './bestbooks/BestBooks';
import About from './About';
import Profile from './Profile';
import Welcome from './Welcome';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={isAuthenticated&&<BestBooks />}
            >
            </Route> 
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route 
              exact path="/About"
              element={<About />}
            >
            </Route>
            <Route 
              exact path="/Profile"
              element={isAuthenticated&&<Profile />}
            >
            </Route>
            
          </Routes>
          {!isAuthenticated&&  <div className='divwelcam'><Welcome /></div>}
          

          <Footer />
        </Router>
       
      </>
    )
  }
}

export default withAuth0 (App);
