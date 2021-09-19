import React from 'react';
import { Switch, Route, Redirect } from 'react-router';


import { Navbar } from '../components/ui/Navbar';
import { Dashboard } from '../components/dashboard/Dashboard';
import { ProtocolScreen } from '../components/protocol/ProtocolScreen';
import { JuiceScreen } from '../components/juice/JuiceScreen';

export const DashboardRoutes = () => {
  return (
    <>


      <Navbar />

      <div>

        <Switch>
          <Route exact path="/protocol" component={ ProtocolScreen } />
          <Route exact path="/dashboard/:dayId" component={ Dashboard } />
          <Route exact path="/juice" component={ JuiceScreen } />

          <Redirect to="/protocol" />
        </Switch>

      </div>

    </>
  )
}
