import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import  Msnjr from "./pages/msnjr/Msnjr"
import Leftbar from "./components/leftbar/Leftbar"
import Rightbar from "./components/rightbar/Rightbar"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import Details from "./pages/details/Details"
import "./style.scss"
import "./style2.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
// import { Details } from "@mui/icons-material";

function App() {
  const {currentUser}  = useContext(AuthContext);
  const {darkMode}= useContext(DarkModeContext)


  const Layout = () => {
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display:"flex"}}>
          <Leftbar/>
          <div style={{flex:10}}>
            <Outlet/>
          </div>
          <Rightbar/>

        </div>
      </div>
    )
  }
  const Layout2 = () => {
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div>
          <Outlet/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="./login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute> <Layout/> </ProtectedRoute>,
      children : [
        {
          path : "/",
          element : <Home/>,
        },
        {
          path : "/profile/:id",
          element : <Profile/>,
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/",
      element: <Layout2/>,
      children : [
        {
          path : "/details/:id",
          element : <Details/>,
        },
        {
          path: "/msnjr",
          element: <Msnjr/>,
        },
      ]
     
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
