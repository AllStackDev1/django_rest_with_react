import {
  ADD_LEAD_REQUEST,
  ADD_LEAD_SUCCESS,
  GET_LEADS_REQUEST,
  GET_LEADS_SUCCESS,
  DELETE_LEAD_REQUEST,
} from "../../constants/actionTypes";

//#region ADD LEAD
export const addLeadRequest = (lead, token) => ({
  type: ADD_LEAD_REQUEST,
  payload: { lead, token },
});
export const addLeadSuccess = (lead) => ({
  type: ADD_LEAD_SUCCESS,
  payload: lead,
});
//#endregion

//#region GET LEADS
export const getLeadsRequest = (token) => ({
  type: GET_LEADS_REQUEST,
  payload: token,
});
export const getLeadsSuccess = (leads) => ({
  type: GET_LEADS_SUCCESS,
  payload: leads,
});
//#endregion

//#region DELETE LEAD
export const deleteLeadsRequest = (id, token) => ({
  type: DELETE_LEAD_REQUEST,
  payload: { id, token },
});
//#endregion
