import React from "react";
import "./Header.css";
import Logo from "./logo.png"
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from "@material-ui/core"

function Header() {
	return (
		<div className="header">
			<img
				src={Logo}
				alt=""
				className="header__icon"
			/>
            <div className="header__center">
                <input type="text"/>
                <SearchIcon />
            </div>
            <div className="header__right">
               <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
		</div>
	);
}

export default Header;
