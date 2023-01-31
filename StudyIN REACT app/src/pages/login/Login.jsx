import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import "./login.scss"

const Login = () => {
    const {login}  = useContext(AuthContext);
    const handlelogin = () =>{
        login();
    }
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello world</h1>
                <p>Welcome to the Login Page!</p>
                <span>Don't u have an account</span>
                <Link to="/register">
                <button>Register</button>
                </Link>

            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="password" />
                    <button onClick={handlelogin}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login