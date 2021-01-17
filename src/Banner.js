import React, {useState} from "react";
import "./Banner.css";
import { Button } from '@material-ui/core';

function Banner() {
    const [showSearch, setShowSearch]=useState(false);


	return (
    <div className="banner">
    <div className="banner__search">
    
        {showSearch && <h1>Show date picker</h1>}
        <Button variant="outlines" className="banner__searchButton" onClick={()=>setShowSearch(!showSearch)}> Search Dates
       </Button>
    </div>
        <div className="banner__info">
            <h1>Get out and stretch out your imagination</h1>
            <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
            <Button variant="outlined">Explore Nearby</Button>
        </div>
    </div>
    )
}

export default Banner;
