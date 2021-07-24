import React, { useEffect } from "react";
import Modal from "../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { fetchStream, deleteStream } from "../actions";
import history from "../history";
import { Link } from "react-router-dom";

export const DeleteStream = props => {
  const streams = useSelector(state => state.streams);
  const streamId = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStream(streamId));
  }, [dispatch, streamId]);

  const actions = (
    <div>
      <button
        className="ui button negative"
        onClick={() => dispatch(deleteStream(streamId))}
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </div>
  );

  const onDismiss = () => {
    history.push("/");
  };

  const content = streams[streamId]
    ? `Are you sure you want to delete the stream with title of ${streams[streamId].title}`
    : "Are you sure you want to delete this stream?";

  return (
    <Modal
      onDismiss={onDismiss}
      title="Delete Stream"
      content={content}
      actions={actions}
    />
  );
};
