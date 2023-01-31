import "./navbar.scss"
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const {toggle, darkMode}= useContext(DarkModeContext);
  const {currentUser}  = useContext(AuthContext);
  return (
    <div className="navbar">



      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>StudyIN</span>
        </Link>
        <Link to="/" style={{textDecoration:"none"}}>
        <HomeOutlinedIcon style={{border:"1.5px solid rgb(29, 113, 113)",borderRadius:"50%", padding:"3px"}}/>
        </Link>
        {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} style={{border:"1.5px solid rgb(29, 113, 113)",borderRadius:"50%", padding:"3px"}}/> : <DarkModeOutlinedIcon onClick={toggle} style={{border:"1.5px solid rgb(29, 113, 113)",borderRadius:"50%", padding:"3px"}}/> } 
        <GridViewOutlinedIcon style={{border:"1.5px solid rgb(29, 113, 113)",borderRadius:"50%", padding:"3px"}}/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search..." />
        </div>
      </div>




      <div className="right">
      <PersonOutlinedIcon style={{border:"1.5px solid rgb(29, 113, 113)",borderRadius:"50%", padding:"3px"}}/>
        <Link to="/msnjr" style={{textDecoration:"none",}}>
        <EmailOutlinedIcon style={{border:"1.5px solid rgb(29, 113, 113)",borderRadius:"50%", padding:"3px"}}/>
        </Link>
       
        <NotificationsOutlinedIcon style={{border:"1.5px solid rgb(29, 113, 113)",borderRadius:"50%", padding:"3px"}}/>


        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>

      </div> 



    </div>  
    
    )
}

export default Navbar