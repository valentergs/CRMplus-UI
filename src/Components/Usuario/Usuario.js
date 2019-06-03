import React, { Component } from "react";
import axios from "axios";

export class Usuario extends Component {
  state = {
    usuarioState: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/usuario").then(res =>
      this.setState({
        usuarioState: res.data
      })
    );
  }

  delUsuario = usuario_id => {
    axios
      .delete(`http://localhost:8080/usuario/delete/${usuario_id}`)
      .then(res =>
        this.setState({
          usuarioState: [
            ...this.state.usuarioState.filter(z => z.usuario_id !== usuario_id)
          ]
        })
      );
  };

  render() {
    return (
      <div>
        <div className="card my-3">
          <div className="card-header">
            <h4>Usuarios</h4>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <button type="button" className="btn btn-outline-primary">
                Adicionar Usuário
              </button>
              {this.state.usuarioState.map(x => (
                <li key={x.usuario_id} className="list-group-item">
                  {x.usuario_id} - {x.nome} {x.sobrenome}
                  <button
                    style={{ float: "right" }}
                    onClick={this.delUsuario.bind(this, x.usuario_id)}
                  >
                    <i className="far fa-trash-alt" />
                  </button>
                  <button style={{ float: "right" }}>
                    <i className="fas fa-pencil-alt" />
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
