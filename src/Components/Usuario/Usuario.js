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
            <ul className="list-group">
              {usuarios.map(x => (
                <li key="usuario_id" className="list-group-item">
                  {x.nome} {x.sobrenome}
                  <button style={{ float: "right" }}>
                    <i className="far fa-trash-alt" />
                  </button>
                  <button style={{ float: "right" }}>
                    <i class="fas fa-pencil-alt" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Usuario;
