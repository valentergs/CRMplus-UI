import React, { Component } from "react";
import axios from "axios";
import AddUsuario from "./AddUsuario";
import SearchUsuario from "./SearchUsuario";

export class Usuario extends Component {
  state = {
    usuarioState: [],
    addUsuarioBtn: true,
    toggleAddUsuarioForm: true
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

  searchUsuario = text => {
    axios
      .get(`http://localhost:8080/search/usuario?q=${text}`)
      .then(res => this.setState({ usuarioState: res.data }));
  };

  clearUsers = () => this.componentDidMount();

  addUsuarioBtnClick = () => {
    this.setState(state => ({ addUsuarioBtn: !state.addUsuarioBtn }));
    this.setState(state => ({
      toggleAddUsuarioForm: !state.toggleAddUsuarioForm
    }));
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="card my-3">
                <div className="card-header">
                  <h4>Busca</h4>
                </div>
                <div className="card-body">
                  <SearchUsuario
                    searchUsuario={this.searchUsuario}
                    clearUsers={this.clearUsers}
                    showClearButton={
                      this.state.usuarioState.length > 0 ? true : false
                    }
                  />
                </div>
              </div>
              <div className="card my-3">
                <div className="card-header">
                  <h4>
                    Usuarios
                    <button
                      onClick={this.addUsuarioBtnClick}
                      style={{ float: "right" }}
                    >
                      {this.state.addUsuarioBtn ? (
                        <i className="fas fa-plus" />
                      ) : (
                        <i className="fas fa-minus" />
                      )}
                    </button>
                  </h4>
                </div>
                <div className="card-body">
                  {this.state.toggleAddUsuarioForm ? (
                    <div
                      className="card-body"
                      id="addUsuario-card"
                      style={{ display: "none" }}
                    >
                      <AddUsuario addUsuario={this.addUsuario} />
                    </div>
                  ) : (
                    <div
                      className="card-body"
                      id="addUsuario-card"
                      style={{ display: "block" }}
                    >
                      <AddUsuario addUsuario={this.addUsuario} />
                    </div>
                  )}

                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Sobrenome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Departamento</th>
                      </tr>
                    </thead>
                    <tbody>
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
                          <tr key={x.usuario_id}>
                            <td>{x.nome}</td>
                            <td>{x.sobrenome}</td>
                            <td>{x.email}</td>
                            <td>{x.departamento}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Usuario;
