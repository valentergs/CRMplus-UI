import React, { Fragment, useContext, useEffect } from "react";
import UsuarioItem from "./UsuarioItem";
import Spinner from "../Layout/Spinner";
import CRMplusContext from "../../Context/crmplus/crmplusContext";

const Usuarios = usuario => {
  const crmplusContext = useContext(CRMplusContext);
  const { usuarioState, getUsuarios } = crmplusContext;

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <Fragment>
      {usuarioState !== null ? (
        usuarioState.map(x => (
          <p>
            {x.nome}
            {"   "}
            {x.sobrenome}
          </p>
        ))
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Usuarios;
