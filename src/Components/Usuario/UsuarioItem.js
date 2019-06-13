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

  return (
    <div className="card bg-light my-3 p-2">
      <h3 style={{ margin: "0 0 10px 5px" }} className="text-primary text-left">
        {nome}
        {"  "}
        {sobrenome}
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <p>{email}</p>
            <p>{celular}</p>
            <p>{departamento}</p>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <p>
                <span style={{ float: "left" }}>
                  {superuser === true ? (
                    <i style={{ color: "green" }} class="far fa-check-circle" />
                  ) : (
                    <i style={{ color: "red" }} class="far fa-times-circle" />
                  )}
                  {"  "}Superuser
                </span>
              </p>
            </div>
            <div className="row">
              <p>
                <span style={{ float: "left" }}>
                  {ativo === true ? (
                    <i style={{ color: "green" }} class="far fa-check-circle" />
                  ) : (
                    <i style={{ color: "red" }} class="far fa-times-circle" />
                  )}
                  {"  "}Ativo
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsuarioItem;
