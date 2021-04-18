import React from "react";

const LoginScreen = ({ history }) => {
  const handleClick = () => {
    //? Diferencia entre psuh y replace...
    //? replace no guarda la historia de navegacion, no permite ir ATRAS
    //history.push("/");
    history.replace("/");
  };
  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
