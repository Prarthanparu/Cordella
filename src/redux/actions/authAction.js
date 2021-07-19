import * as authApis from "../../services/auth";
import * as authActionType from "../actionsType/authActionType";

export const loginUser = (params) => async (dispatch) => {
  const response = await authApis.loginUser(params);
  if (response) {
    if (response.data.success) {
      localStorage.setItem("isLoggedIn", true);
      dispatch({
        type: authActionType.LOGIN_USER,
        payload: response.data,
      });
    }
    return response.data;
  }
  return response

};

