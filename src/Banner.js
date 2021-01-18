import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import {useHistory} from "react-router-dom";

function Banner() {
	const history=useHistory();
	const [showSearch, setShowSearch] = useState(false);

	return (
		<div className="banner">
			<div className="banner__search">
				<Button
					variant="outlines"
					className="banner__searchButton"
					onClick={() => setShowSearch(!showSearch)}
				>
					{showSearch ? "Hide" : "Show Search"}
				</Button>
				{showSearch && <Search />}
			</div>
			<div className="banner__info">
				<h1>Get out and stretch out your imagination</h1>
				<h5>
					Plan a different kind of getaway to uncover the hidden gems near you.
				</h5>
				<Button variant="outlined" onClick={()=>history.push("/search")}>Explore Nearby</Button>
			</div>
		</div>
	);
}

export default Banner;
