import React from 'react';
import { Switch, Route, Redirect } from 'react-router';


import { Navbar } from '../components/Layout/Navbar';
import { FastingScreen } from '../components/FastingScreen/FastingScreen';
import { JuicesScreen } from '../components/JuicesScreen/JuicesScreen';
import { RebootScreen } from '../components/RebootScreen/RebootScreen';


export const JuicesRoutes = () => {
  return (
    <>

      <Navbar />

      <div className="container mt-2">

        <Switch>
          <Route exact path="/reboot" component={ RebootScreen } />
          <Route exact path="/fast" component={ FastingScreen } />
          <Route exact path="/juice/:dayId" component={ JuicesScreen } />

          <Redirect to="/reboot" />
        </Switch>

      </div>

    </>
  )
}
