import React, { useContext } from "react";
import CRMplusContext from "../../Context/crmplus/crmplusContext";

const UsuarioItem = ({ usuario }) => {
  const crmplusContext = useContext(CRMplusContext);

  const {
    usuario_id,
    nome,
    sobrenome,
    email,
    celular,
    superuser,
    ativo,
    departamento
  } = usuario;

  return <div />;
};

export default UsuarioItem;
