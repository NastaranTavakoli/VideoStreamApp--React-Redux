import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = () => {
  const signedIn = useSelector(state => state.auth.isSignedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "485394869804-nt598ifasp5ijv84eo9oh33ludbjvut0.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth);
          auth.isSignedIn.listen(() => onAuthChange(auth));
        });
    });
  }, []);

  const onAuthChange = auth => {
    if (auth.isSignedIn.get()) {
      dispatch(signIn(auth.currentUser.get().getId()));
    } else {
      dispatch(signOut());
    }
  };

  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  const renderedButton = () => {
    if (signedIn == null) {
      return null;
    } else if (signedIn) {
      return (
        <button className="ui red google button" onClick={onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={onSignInClick}>
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  };

  return <div>{renderedButton()}</div>;
};

export default GoogleAuth;
