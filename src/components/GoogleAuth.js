import React, { useEffect, useState } from "react";

const GoogleAuth = () => {
  const [signedIn, setsignedIn] = useState(null);
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
          setsignedIn(auth.isSignedIn.get());
          auth.isSignedIn.listen(() => onAuthChange(auth));
        });
    });
  }, []);

  const onAuthChange = auth => {
    setsignedIn(auth.isSignedIn.get());
  };

  const signIn = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const signOut = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  const renderedButton = () => {
    if (signedIn == null) {
      return null;
    } else if (signedIn) {
      return (
        <button className="ui red google button" onClick={signOut}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={signIn}>
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  };

  return <div>{renderedButton()}</div>;
};

export default GoogleAuth;
