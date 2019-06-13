import React, { useReducer } from "react";
import axios from "axios";
import CrmplusContext from "./crmplusContext";
import CrmplusReducer from "./crmplusReducer";
import {
  DEL_USUARIO,
  ADD_USUARIO,
  FILTER_USUARIO,
  GET_USUARIOS
} from "../types";

const CrmplusState = props => {
  const initialState = {
    usuarioState: [],
    addUsuarioBtn: true,
    toggleAddUsuarioForm: true
  };

  const [state, dispatch] = useReducer(CrmplusReducer, initialState);

  // Get Usuarios
  const getUsuarios = async () => {
    const res = await axios.get("http://localhost:8080/usuario");
    dispatch({
      type: GET_USUARIOS,
      payload: res.data
    });
  };

  // Delete Usuario
  const delUsuario = usuario_id => {
    axios.delete(`http://localhost:8080/usuario/delete/${usuario_id}`);
    dispatch({
      type: DEL_USUARIO,
      payload: usuario_id
    });
  };

  // Add Usuario
  const addUsuario = usuario => {
    axios.post("http://localhost:8080/usuario/add");
    dispatch({
      type: ADD_USUARIO,
      payload: usuario
    });
  };

  // Search Usuario
  const filterUsuario = text => {
    dispatch({
      type: FILTER_USUARIO,
      payload: text
    });
  };

  return (
    <CrmplusContext.Provider
      value={{
        usuarioState: state.usuarioState,
        addUsuarioBtn: state.addUsuarioBtn,
        toggleAddUsuarioForm: state.toggleAddUsuarioForm,
        delUsuario,
        addUsuario,
        getUsuarios,
        filterUsuario
      }}
    >
      {props.children}
    </CrmplusContext.Provider>
  );
};

export default CrmplusState;
