import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import {
  DeleteStream,
  StreamList,
  EditStream,
  ShowStream,
  CreateStream,
} from "../pages";
import NavBar from "./NavBar";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/list" exact component={StreamList} />
          <Route path="/streams/create" exact component={CreateStream} />
          <Route path="/streams/:id" exact component={ShowStream} />
          <Route path="/streams/delete/:id" exact component={DeleteStream} />
          <Route path="/streams/edit/:id" exact component={EditStream} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
