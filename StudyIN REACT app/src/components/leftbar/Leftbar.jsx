import "./leftbar.scss"
import { Link } from "react-router-dom";
import Groups from "../../assets/2.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Leftbar = () => {
  const {currentUser}  = useContext(AuthContext);
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
             <img src={currentUser.profilePic} alt="" />
             <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Study Groups</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Teachers you liked</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <Link to="/msnjr" style={{textDecoration:"none"}}>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
          </Link>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Leftbar