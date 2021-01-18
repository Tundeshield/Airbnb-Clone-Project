import React from "react";
import "./SearchPage.css";
import Button from "@material-ui/core/Button";
import SearchResult from "./SearchResult";
import interior from "./interior.jpg"

function SearchPage() {
	return (
		<div className="search__page">
			<h2>Search Page</h2>
			<div className="searchPage__info">
				<p>62 stays . 26 august to 30 august . 2 guest</p>
				<h1>Stays Nearby</h1>
				<Button variant="outlined">Cancellation Flexibility</Button>
				<Button variant="outlined">Type of Place</Button>
				<Button variant="outlined">Price</Button>
				<Button variant="outlined">Rooms and Beds</Button>
				<Button variant="outlined">More Filters</Button>
			</div>
            <SearchResult img={interior} location="Picadily road, Central London, UK" title="Stay at this spacious Edwardian apartment." description="1 guest . 1 bedroom . 1 bed . 1.5 shared btrooms .Wifi . Kitchen . Free parking . Washing Machine" star={4.73} price="£50/night" total="£117 total" />
            <SearchResult img={interior} location="Picadily road, Central London, UK" title="Stay at this spacious Edwardian apartment." description="1 guest . 1 bedroom . 1 bed . 1.5 shared btrooms .Wifi . Kitchen . Free parking . Washing Machine" star={4.73} price="£50/night" total="£117 total" />
		</div>
	);
}

export default SearchPage;
