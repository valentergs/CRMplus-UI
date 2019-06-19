import React, { useContext } from "react";
import CRMplusContext from "../../Context/crmplus/crmplusContext";

const UsuarioItem = ({ usuario }) => {
  const crmplusContext = useContext(CRMplusContext);
  const { delUsuario } = crmplusContext;

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

  const onDelete = () => {
    delUsuario(usuario_id);
  };

  return (
    <div className="card shadow-sm rounded bg-light my-3 p-2">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h5
              style={{ margin: "0 0 10px 5px" }}
              className="text-primary text-left"
            >
              {/* NOME DO USUARIO */}
              {nome}
              {"  "}
              {sobrenome}
            </h5>
            {/* BOTÃO DE APAGAR */}
            <button className="btn btn-danger btn-sm" onClick={onDelete}>
              Apagar
            </button>
          </div>
          <div className="col-sm-3">
            <p>
              <span style={{ float: "left" }}>
                {superuser === true ? (
                  <i
                    style={{ color: "green" }}
                    className="far fa-check-circle"
                  />
                ) : (
                  <i style={{ color: "red" }} className="far fa-times-circle" />
                )}
                {"  "}Superuser
              </span>
            </p>
          </div>
          <div className="col-sm-2">
            <p>
              <span style={{ float: "left" }}>
                {ativo === true ? (
                  <i
                    style={{ color: "green" }}
                    className="far fa-check-circle"
                  />
                ) : (
                  <i style={{ color: "red" }} className="far fa-times-circle" />
                )}
                {"  "}Ativo
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p>{email}</p>
          </div>
          <div className="col-sm-3">
            <p>{celular}</p>
          </div>
          <div className="col-sm-3">
            <p>{departamento}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsuarioItem;
