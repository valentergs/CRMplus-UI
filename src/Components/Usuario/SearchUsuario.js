import React, { Component } from "react";

export class SearchUsuario extends Component {
  state = {
    text: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsuario(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    const { showClearButton, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            style={{ width: "300px" }}
            type="text"
            name="text"
            placeholder="Procurar usuários..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            style={{ marginLeft: "20px" }}
            type="submit"
            value="Procurar"
            className="btn btn-dark btn block"
          />
          {showClearButton && (
            <button
              onClick={clearUsers}
              className="btn btn-dark btn block"
              style={{ marginLeft: "20px" }}
            >
              Limpar
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default SearchUsuario;
