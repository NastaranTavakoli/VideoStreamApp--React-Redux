import axios from "axios";
import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from "./types";

export const createStream = formValues => async dispatch => {
  const response = await axios.post(
    "http://localhost:3001/streams",
    formValues
  );
  dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async dispatch => {
  const response = await axios.get("http://localhost:3001/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await axios.get(`http://localhost:3001/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await axios.put(
    `http://localhost:3001/streams/${id}`,
    formValues
  );
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = id => async dispatch => {
  await axios.delete(`http://localhost:3001/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
