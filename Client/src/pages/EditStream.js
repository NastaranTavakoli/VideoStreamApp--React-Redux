import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editStream, fetchStream } from "../actions";
import { StreamForm } from "../components/StreamForm";
import _ from "lodash";

export const EditStream = props => {
  const streamId = props.match.params.id;
  const streams = useSelector(state => state.streams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStream(streamId));
  }, [streamId, dispatch]);

  const onSubmit = formValues => {
    dispatch(editStream(streamId, formValues));
  };

  return (
    <div>
      <StreamForm
        initialValues={_.pick(streams[streamId], "title", "description")}
        onSubmit={onSubmit}
      />
    </div>
  );
};
