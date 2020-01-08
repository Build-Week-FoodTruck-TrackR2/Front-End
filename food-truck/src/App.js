import React from 'react';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import DinerDashboard from './components/dinerdashboard/index';
import OperatorDashboard from "./components/operatordashboard/index";
import LoginPage from './components/loginpage/index';
import TruckPage from './components/truckpage/index';
import SignupOperator from './components/signup/signupoperator';
import DinerSignUp from './components/signup/signupdiner';


const GlobalStyle = createGlobalStyle`

`;

const OperatorRoute = ({ component: Component, ...rest}) => (

  <Route
    {...rest}
    render ={props => 
    localStorage.getItem('role') === "Operator" ? (
      <Component {...props} /> 
    ) : (
      <Redirect to="/" />
    )
    }
    />
);

const DinerRoute = ({ component: Component, ...rest}) => (

  <Route
    {...rest}
    render ={props => 
    localStorage.getItem('role') === "Diner" ? (
      <Component {...props} /> 
    ) : (
      <Redirect to="/" />
    )
    }
    />
);

const TruckPageRoute = ({ component: Component, ...rest}) => (

  <Route
    {...rest}
    render ={props => 
    localStorage.getItem('role') ===  "Operator" ? (
      <Component {...props} /> 
    ) : (
    localStorage.getItem('role') === "Diner") ? (
      <Component {...props} /> 
    ) : (
      <Redirect to="/" />
    )
    }
    />
);

function App() {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle />

      <Switch>
         <Route exact path="/" component={LoginPage} />
        <Route path="/dinerdashboard" component={DinerDashboard} />
        <OperatorRoute path="/operatordashboard" component={OperatorDashboard} />
        <TruckPageRoute path="/truckpage" component={TruckPage} /> 
        <Route path ="/opsignup" component={SignupOperator} />
        <DinerRoute path="/dinersignup" component={DinerSignUp} />
      </Switch>
          
    </div>
  );
}

export default App;
