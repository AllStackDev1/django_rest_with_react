import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

const App = () => {
  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
