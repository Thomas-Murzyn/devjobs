import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import bgImage from "./backgroundImage.jpg";

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={bgImage} alt="background profil" />
        <Avatar className="sidebar_avatar" />
        <h2>Thomas Murzyn</h2>
        <h4>murzynthomas@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <div className="sidebar_statNumber">2.5675</div>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <div className="sidebar_statNumber">2.5870</div>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("React")}
        {recentItem("TypeScript")}
        {recentItem("Javascript")}
        {recentItem("Programing")}
        {recentItem("Design")}
      </div>
    </div>
  );
}

export default Sidebar;
