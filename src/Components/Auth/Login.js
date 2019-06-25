import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../Context/auth/authContext";

const Login = props => {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    senha: ""
  });

  const { login, isAuthenticated } = authContext;

  const { email, senha } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated, props.history]);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login({
      email,
      senha
    });
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            style={{ width: "300px" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            value={senha}
            onChange={onChange}
            style={{ width: "300px" }}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
