import { CREATE_MESSAGE, GET_ERRORS } from "../../constants/actionTypes";

export const createMessage = (message) => ({
  type: CREATE_MESSAGE,
  payload: message,
});
export const getErrors = (errors) => ({
  type: GET_ERRORS,
  payload: errors,
});
