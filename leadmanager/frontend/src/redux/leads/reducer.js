import {
  ADD_LEAD_REQUEST,
  ADD_LEAD_SUCCESS,
  GET_LEADS_REQUEST,
  GET_LEADS_SUCCESS,
  DELETE_LEAD_REQUEST,
} from "../../constants/actionTypes";

const INIT_STATE = {
  leads: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    //#region ADD LEAD
    case ADD_LEAD_REQUEST:
      return { ...state };
    case ADD_LEAD_SUCCESS:
      return {
        ...state,
        leads: [...state.leads, action.payload],
      };
    //#endregion
    //#region GET LEADS
    case GET_LEADS_REQUEST:
      return { ...state };
    case GET_LEADS_SUCCESS:
      return { ...state, leads: action.payload };
    //#endregion
    //#region DELETE LEADS
    case DELETE_LEAD_REQUEST:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== action.payload),
      };
    //#endregion
    default:
      return { ...state };
  }
};
