import React, { Fragment, useContext, useEffect } from "react";
import UsuarioItem from "./UsuarioItem";
import UsuarioFilter from "./UsuariosFilter";
// import Spinner from "../Layout/Spinner";
import CRMplusContext from "../../Context/crmplus/crmplusContext";

const Usuarios = () => {
  const crmplusContext = useContext(CRMplusContext);
  const { usuarioState, getUsuarios, filtered } = crmplusContext;

  useEffect(() => {
    getUsuarios();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <UsuarioFilter />
            {filtered !== null
              ? filtered.map(usuario => (
                  <UsuarioItem usuario={usuario} key={usuario.usuario_id} />
                ))
              : usuarioState.map(usuario => (
                  <UsuarioItem usuario={usuario} key={usuario.usuario_id} />
                ))}
          </div>
          <div className="col-md-5" />
        </div>
      </div>
    </Fragment>
  );
};

export default Usuarios;
