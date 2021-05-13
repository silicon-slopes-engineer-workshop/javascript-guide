import logo from './logo.svg';
import './main.css';
import './bootstrap.css';
import Header from "./header";
import FeaturedHouse from './featuredhouse';
import { Component } from 'react';
import HouseFilter from './house-filter';

class App extends Component {

	state = {}

	fetchHouses = () => {
		fetch('/houses.json')
		.then(rsp => rsp.json())
		.then(allHouses => {
			this.allHouses = allHouses;
			this.determineFeaturedHouse();
			this.determineUniqueCountries();
		})
	};

	determineFeaturedHouse = () => {
		if (this.allHouses) {
			const randomIndex = Math.floor(Math.random() * this.allHouses);
			const featuredHouse = this.allHouses[randomIndex];
			this.setState({ featuredHouse });
		};
	};

	determineUniqueCountries = () => {
		const countries = this.allHouses 
			? Array.from(new Set(this.allHouses.map(h => h.country))) 
			: [];
		countries.unshift(null);
		this.setState({ countries });
	}

	render() {
		return (
			<div className="container">
				<Header subtitle="Providing houses world wide" />
				<HouseFilter countries={this.state.countries} />
				<FeaturedHouse house={this.state.featuredHouse} />
			</div>
		);
	}
}

export default App;
