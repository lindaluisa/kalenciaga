import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import { LoginScreen } from '../components/Login/LoginScreen';
import { JuicesRoutes } from './JuicesRoutes';

// import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
  return (
    <Router>
      <div>

        {/* <Navbar /> */}

        <Switch>
            <Route exact path="/login" component={ LoginScreen }/>
            <Route path="/" component={ JuicesRoutes }/>
        </Switch>
      </div>

    </Router>
  )
}
