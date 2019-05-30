import React, { Component } from "react";
import axios from "axios";

export class Usuario extends Component {
  state = {
    usuarios: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/usuario").then(res =>
      this.setState({
        usuarios: res.data
      })
    );
  }

  render() {
    const { usuarios } = this.state;
    return (
      <div>
        <div className="card my-3">
          <div className="card-header">
            <h4>Usuarios</h4>
          </div>
          <div className="card-body">
            {usuarios.map(x => (
              <p key="usuario_id">
                {x.nome} {x.sobrenome}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Usuario;
