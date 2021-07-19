import * as apis from "../../services/route";
import * as actionType from "../actionTypes/routeActionType";

export const getRoutes = (params) => async (dispatch) => {
  const response = await apis.getRoutes(params);
  if (response) {
    if (response.statusText === "OK") {
      return dispatch({
        type: actionType.GET_ROUTES,
        payload: response.data.data.routes,
      });
    }
  }
  return response
};