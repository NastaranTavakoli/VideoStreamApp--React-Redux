import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStream } from "../actions";

export const ShowStream = props => {
  const streams = useSelector(state => state.streams);
  const dispatch = useDispatch();
  const streamId = props.match.params.id;
  const stream = streams[streamId];
  console.log(stream);

  useEffect(() => {
    dispatch(fetchStream(streamId));
  }, [dispatch, streamId]);

  const renderStream = () => {
    if (!stream) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>{stream.title}</h1>
          <h5>{stream.description}</h5>
        </div>
      );
    }
  };

  return <div>{renderStream()}</div>;
};
