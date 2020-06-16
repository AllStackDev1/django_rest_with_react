import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Provider } from "react-redux";
import { configureStore } from "../redux/store";

import "semantic-ui-css/semantic.min.css";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Navbar from "./layout/Navbar";
import Alert from "./layout/Alert";
import Dashboard from "./leads/Dashboard";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";

import { loadUserRequest } from "../redux/actions";

const options = {
  position: positions.TOP_CENTER,
  timeout: 10000,
  offset: "30px",
  transition: transitions.FADE,
  containerStyle: {
    zIndex: 1000,
  },
};

const App = () => {
  useEffect(() => {
    const token = configureStore().getState().auth.token;
    if (token) {
      configureStore().dispatch(loadUserRequest(token));
    }
  }, []);

  return (
    <Provider store={configureStore()}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <Navbar />
          <Alert />
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/home" component={Dashboard} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </AlertProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
