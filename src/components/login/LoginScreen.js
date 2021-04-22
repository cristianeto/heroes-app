import React, { useContext } from "react";
import { types } from "../../types/types";
import { AuthContext } from "../../auth/AuthContext";

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleClick = () => {
    //? Diferencia entre psuh y replace...
    //? replace no guarda la historia de navegacion, no permite ir ATRAS
    //history.push("/");

    const action = {
      type: types.login,
      payload: { name: "Cristian" },
    };
    dispatch(action);
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
