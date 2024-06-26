import React from "react";
import "./navbar.scss";
// STORE
import { useSelector, useDispatch } from "react-redux";
import { tuggleTheme } from "../../app/themeSlice";

// MUI
import SearchIcon from "@mui/icons-material/Search";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

export default function Navbar() {
  const theme = useSelector((state) => state.theme.t);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" name="search" placeholder="بحث ..." />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            عربي
          </div>
          <div className="item" onClick={() => dispatch(tuggleTheme())}>
            {theme === "" ? (
              <DarkModeOutlinedIcon className="icon" />
            ) : (
              <LightModeIcon className="icon" />
            )}
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://cdn.pixabay.com/photo/2023/01/30/20/02/bird-7756521_1280.jpg"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
