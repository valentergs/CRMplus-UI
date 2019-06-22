import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    error: null,
    loading: true,
    user: null
  };

  // Load User

  // Register User

  // Login User

  // Logout

  // Clear Errors

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        loading: state.loading,
        user: state.user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
