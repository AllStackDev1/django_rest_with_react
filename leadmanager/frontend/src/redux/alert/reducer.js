import { CREATE_MESSAGE, GET_ERRORS } from "../../constants/actionTypes";

const INIT_STATE = {
  message: null,
  errors: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return { ...state, message: action.payload };
    case GET_ERRORS:
      return { ...state, errors: action.payload };
    default:
      return { ...state };
  }
};
