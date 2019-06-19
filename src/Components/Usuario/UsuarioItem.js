import React from "react";
//import CRMplusContext from "../../Context/crmplus/crmplusContext";

const UsuarioItem = ({ usuario }) => {
  //const crmplusContext = useContext(CRMplusContext);

  const {
    //usuario_id,
    nome,
    sobrenome,
    email,
    celular,
    superuser,
    ativo,
    departamento
  } = usuario;

  return (
    <div className="card shadow-sm rounded bg-light my-3 p-2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4
              style={{ margin: "0 0 10px 5px" }}
              className="text-primary text-left"
            >
              {nome}
              {"  "}
              {sobrenome}
            </h4>
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
          <div className="col-sm-3">
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
