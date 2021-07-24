import axios from "axios";
import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from "./types";
import history from "../history";

export const createStream = formValues => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await axios.post("http://localhost:3001/streams", {
    ...formValues,
    userId,
  });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/");
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
  const response = await axios.patch(
    `http://localhost:3001/streams/${id}`,
    formValues
  );
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = id => async dispatch => {
  await axios.delete(`http://localhost:3001/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
