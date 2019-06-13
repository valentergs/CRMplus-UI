import {
  DEL_USUARIO,
  ADD_USUARIO,
  FILTER_USUARIO,
  GET_USUARIOS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_USUARIOS:
      return {
        ...state,
        usuarioState: action.payload
      };
    case ADD_USUARIO:
      return {
        ...state,
        usuarioState: [...state.usuarioState, action.payload]
      };
    case DEL_USUARIO:
      return {
        ...state,
        usuarioState: state.usuarioState.filter(
          x => x.usuario_id !== action.payload
        )
      };
    case FILTER_USUARIO:
      return {
        ...state,
        usuarioState: action.payload
      };
    default:
      return state;
  }
};
