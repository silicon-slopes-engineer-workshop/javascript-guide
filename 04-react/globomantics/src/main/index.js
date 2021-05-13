import { Component } from 'react';
import logo from './logo.svg';
import './main.css';
import './bootstrap.css';
import Header from "./header";
import FeaturedHouse from './featuredhouse';
import HouseFilter from './house-filter';

class App extends Component {

	state = {}

	componentDidMount() {
		this.fetchHouses();
	}

	fetchHouses = () => {
		fetch('/houses.json')
			.then(rsp => rsp.json())
			.then(allHouses => {
				this.allHouses = allHouses;
				this.determineFeaturedHouse();
				this.determineUniqueCountries();
			})
	}

	determineFeaturedHouse = () => {
		if (this.allHouses) {
			const randomIndex = Math.floor(Math.random() * this.allHouses);
			const featuredHouse = this.allHouses[randomIndex];
			this.setState({ featuredHouse });
		};
	}

	determineUniqueCountries = () => {
		const countries = this.allHouses
			? Array.from(new Set(this.allHouses.map(h => h.country)))
			: [];
		countries.unshift(null);
		this.setState({ countries });
	}

	filterHouses = (country) => {
		const filteredHouses = this.allHouses.filter((h) => h.country === country);
		this.setState({ filteredHouse });
		this.setState({ country });
	}

	render() {
		return (
			<div className="container">
				<Header subtitle="Providing houses world wide" />
				<HouseFilter countries={this.state.countries} filterHouses={this.filterHouses} />
				<FeaturedHouse house={this.state.featuredHouse} />
			</div>
		);
	}
}

export default App;
