import React from 'react';
import { Switch, Route, Redirect } from 'react-router';


import { Navbar } from '../components/Layout/Navbar';
import { FruitScreen } from '../components/FruitScreen/FruitScreen';
import { GreenScreen } from '../components/GreenScreen/GreenScreen';
import { JuicesScreen } from '../components/JuicesScreen/JuicesScreen';

export const JuicesRoutes = () => {
  return (
    <>

      <Navbar />

      <div>

        <Switch>
          <Route exact path="/fruit" component={ FruitScreen } />
          <Route exact path="/green" component={ GreenScreen } />
          <Route exact path="/juice/:dayId" component={ JuicesScreen } />

          <Redirect to="/fruit" />
        </Switch>

      </div>

    </>
  )
}
