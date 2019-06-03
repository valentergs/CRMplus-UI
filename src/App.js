import React from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import Sidebar from "./Components/Layout/Sidebar";
import Usuario from "./Components/Usuario/Usuario";
import Produto from "./Components/Produto/Produto";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-6">
            <Usuario />
            <Produto />
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    </div>
  );
}

export default App;
