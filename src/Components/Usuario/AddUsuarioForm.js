import React, { useEffect, useContext, useState } from "react";
import CRMplusContext from "../../Context/crmplus/crmplusContext";

const AddUsuarioForm = () => {
  const crmplusContext = useContext(CRMplusContext);
  const { addUsuario, updateUsuario, current, clearCurrent } = crmplusContext;

  useEffect(() => {
    if (current !== null) {
      setUsuario(current);
    } else {
      setUsuario({
        nome: "",
        sobrenome: "",
        senha: "",
        email: "",
        celular: "",
        superuser: false,
        ativo: false,
        departamento: ""
      });
    }
  }, [crmplusContext, current]);

  const [usuario, setUsuario] = useState({
    nome: "",
    sobrenome: "",
    senha: "",
    email: "",
    celular: "",
    superuser: false,
    ativo: false,
    departamento: ""
  });

  const {
    nome,
    sobrenome,
    senha,
    email,
    celular,
    superuser,
    ativo,
    departamento
  } = usuario;

  const onChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setUsuario({ ...usuario, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addUsuario(usuario);
    } else {
      updateUsuario(usuario);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div>
      <form onSubmit={onSubmit} method="post">
        <h2 className="text-primary">
          {current ? "Edit Contact" : "Add Contact"}
        </h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            name="nome"
            value={nome}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Sobrenome"
            name="sobrenome"
            value={sobrenome}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Senha"
            name="senha"
            value={senha}
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Sua senha será encriptada em nosso Banco de Dados.
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Celular"
            name="celular"
            value={celular}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <select
            type="text"
            className="form-control"
            placeholder="Departamento"
            name="departamento"
            value={departamento}
            onChange={onChange}
          >
            <option value="-----">-----</option> />
            <option value="Vendas">Vendas</option>
            <option value="Marketing">Marketing</option>
            <option value="Financeiro">Financeiro</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            name="superuser"
            value={superuser}
            onChange={onChange}
          />
          <label style={{ marginLeft: "4px" }}>Superuser</label>

          <input
            style={{ marginLeft: "15px" }}
            type="checkbox"
            name="ativo"
            value={ativo}
            onChange={onChange}
          />
          <label style={{ marginLeft: "4px" }}>Ativo</label>
        </div>
        <div>
          <input
            type="submit"
            value={current ? "Update Contact" : "Add Contact"}
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default AddUsuarioForm;
