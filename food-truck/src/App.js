import React from 'react';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import DinerDashboard from './components/dinerdashboard/index';
import OperatorDashboard from "./components/operatordashboard/index";
import LoginPage from './components/loginpage/index';
import TruckPage from './components/truckpage/index';
import SignupOperator from './components/signup/signupoperator';
import DinerSignUp from './components/signup/signupdiner';

const GlobalStyle = createGlobalStyle`

`;

function App() {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle />

      < Switch >
         <Route exact path="/" component={LoginPage} />
        <Route path="/dinerdashboard" component={DinerDashboard} />
        <Route path="/operatordashboard" component={OperatorDashboard} />
        <Route path="/truckpage" component={TruckPage} /> 
        <Route path ="/opsignup" component={SignupOperator} />
        <Route path="/dinersignup" component={DinerSignUp} />
      </Switch>
          
    </div>
  );
}

export default App;
