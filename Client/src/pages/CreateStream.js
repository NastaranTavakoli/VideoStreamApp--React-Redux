import React from "react";
import { useDispatch } from "react-redux";
import { createStream } from "../actions";
import { StreamForm } from "../components/StreamForm";

export const CreateStream = () => {
  const dispatch = useDispatch();
  const onSubmit = formValues => {
    dispatch(createStream(formValues));
  };

  return (
    <div>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};
