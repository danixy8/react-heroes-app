import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);
  
  const action = {
    type: types.login,
    payload: { name: 'Daniel' }
  };

  const lastPath = localStorage.getItem('lastPath') || '/marvel';

  const handleLogin = () => {

    dispatch(action)
    navigate(lastPath , {
      replace: true
    });
  };
  
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
      className="btn btn-primary"
      onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}