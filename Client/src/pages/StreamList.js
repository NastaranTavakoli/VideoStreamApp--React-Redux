import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchStreams } from "../actions";
import { Link } from "react-router-dom";

export const StreamList = () => {
  const dispatch = useDispatch();
  const streams = useSelector(state => state.streams);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(fetchStreams());
  }, []);

  const renderCreateButton = () => {
    if (auth.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/create">
            <button className="ui button primary">Create Stream</button>
          </Link>
        </div>
      );
    }
  };

  const renderAdminButtons = stream => {
    if (auth.userId === stream.userId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>
            EDIT
          </Link>
          <Link
            className="ui button negative"
            to={`/streams/delete/${stream.id}`}
          >
            DELETE
          </Link>
        </div>
      );
    }
  };

  const renderList = () =>
    Object.values(streams).map(stream => {
      return (
        <div className="item" key={stream.id}>
          {renderAdminButtons(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <div className="header">{stream.title}</div>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList(streams)}</div>
      <div>{renderCreateButton()}</div>
    </div>
  );
};
