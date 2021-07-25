import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStream } from "../actions";
import flv from "flv.js";

export const ShowStream = props => {
  const streams = useSelector(state => state.streams);
  const dispatch = useDispatch();
  const videoRef = useRef();
  const streamId = props.match.params.id;
  const stream = streams[streamId];

  useEffect(() => {
    let player;
    const getStream = async () => {
      if (!stream) {
        await dispatch(fetchStream(streamId));
      }
      player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${streamId}.flv`,
      });
      player.attachMediaElement(videoRef.current);
      player.load();
    };
    getStream();
    return () => {
      player.destroy();
    };
  }, [dispatch, streamId, stream]);

  const renderStream = () => {
    if (!stream) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <video ref={videoRef} style={{ width: "100%" }} controls />
          <h1>{stream.title}</h1>
          <h5>{stream.description}</h5>
        </div>
      );
    }
  };

  return <div>{renderStream()}</div>;
};
