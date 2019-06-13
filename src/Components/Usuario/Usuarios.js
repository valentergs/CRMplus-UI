import React, { Fragment, useContext, useEffect } from "react";
import UsuarioItem from "./UsuarioItem";
import Spinner from "../Layout/Spinner";
import CRMplusContext from "../../Context/crmplus/crmplusContext";

const Usuarios = () => {
  const crmplusContext = useContext(CRMplusContext);
  const { usuarioState, getUsuarios } = crmplusContext;

  useEffect(() => {
    getUsuarios();
  }, [crmplusContext, getUsuarios]);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {usuarioState !== null ? (
              usuarioState.map(usuario => (
                <UsuarioItem usuario={usuario} key={usuario.usuario_id} />
              ))
            ) : (
              <Spinner />
            )}
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    </Fragment>
  );
};

export default Usuarios;
