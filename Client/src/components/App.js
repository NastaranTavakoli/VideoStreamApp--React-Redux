import React from "react";
import { Router, Route } from "react-router-dom";
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
        <div>
          <NavBar />
          <Route path="/" exact component={StreamList} />
          <Route path="/stream" exact component={ShowStream} />
          <Route path="/delete" exact component={DeleteStream} />
          <Route path="/edit" exact component={EditStream} />
          <Route path="/create" exact component={CreateStream} />
        </div>
      </Router>
    </div>
  );
};

export default App;
