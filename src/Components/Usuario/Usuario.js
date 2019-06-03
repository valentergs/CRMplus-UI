import React, { Component } from "react";
import axios from "axios";
import AddUsuario from "./AddUsuario";

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

  addUsuario = addUsuarioState => {
    axios
      .post("http://localhost:8080/usuario/add", addUsuarioState)
      .then(res =>
        this.setState({ usuarioState: [...this.state.usuarioState, res.data] })
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
              <div className="card my-3">
                <div className="card-body">
                  <AddUsuario addUsuario={this.addUsuario} />
                </div>
              </div>

              {this.state.usuarioState
                // // Sort the list array - if string
                // .sort(function(a, b) {
                //   var nameA = a.sobrenome.toUpperCase(); // ignore upper and lowercase
                //   var nameB = b.sobrenome.toUpperCase(); // ignore upper and lowercase
                //   if (nameA < nameB) {
                //     return -1;
                //   }
                //   if (nameA > nameB) {
                //     return 1;
                //   }

                //   // names must be equal
                //   return 0;
                // })
                // // Sort the list array - if integer
                .sort(function(a, b) {
                  return b.usuario_id - a.usuario_id;
                })
                .map(x => (
                  <li key={x.usuario_id} className="list-group-item">
                    {x.sobrenome}, {x.nome}
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
