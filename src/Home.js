import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
import kigali1 from "./kigali1.jpg";
import kigali2 from "./kigali2.jpg";
import kigali3 from "./kigali3.jpg";
import pic2 from "./pic2.jpg";

function Home() {
	return (
		<div className="home">
			<Banner />
			<div className="home__section">
				<Card
					src={kigali1}
					title="Executives room - Days Inn Star"
					description="Spacious,homey living area perfect for family(with kids), accommodates 6 people comfortably."
				/>
				<Card
					src={kigali2}
					title="Private House near Kigali Conventional Center"
					description="Spacious,homey living area perfect for family(with kids), accommodates 6 people comfortably."
				/>
				<Card
					src={kigali3}
					title="Tres chic house in Kigali"
					description="Spacious,homey living area perfect for family(with kids), accommodates 6 people comfortably."
				/>
			</div>
			<div className="home__section">
				<Card
					src={pic2}
					title="Tres chic house in Kigali"
					description="Spacious,homey living area perfect for family(with kids), accommodates 6 people comfortably."
					price="$55/Night"
				/>
				<Card
					src={pic2}
					title="Tres chic house in Kigali"
					description="Spacious,homey living area perfect for family(with kids), accommodates 6 people comfortably."
					price="$55/Night"
				/>
				<Card
					src={pic2}
					title="Tres chic house in Kigali"
					description="Spacious,homey living area perfect for family(with kids), accommodates 6 people comfortably."
					price="$55/Night"
				/>
			</div>
		</div>
	);
}

export default Home;
