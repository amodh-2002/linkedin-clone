import React from "react";
import "./Header.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="http://t0.gstatic.com/images?q=tbn:ANd9GcRMCA3j2A8hfLl9p5UAU5nd9lvqLlNZvqoU4xOsZ192uH4IYS6X"
          alt=" pix"
        />
        <div className="header__search">
          {/* search icon   */}
          <SearchRoundedIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
          
      </div>
    </div>
  );
}

export default Header;
