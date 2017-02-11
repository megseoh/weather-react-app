import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

export default class Weather extends Component {

	constructor() {
		super();
		// this is how we define initial state in es6
		// this.state = {
		// 	location: 'Paris',
		// 	temp: 88,
		// }
		this.state = {
			isLoading: false
		}

		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(location) {
		var that = this;

		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(temp => {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false,
			});
		}, errorMessage => {
			that.setState({
				isLoading: false,
			});
			alert(errorMessage);
		});
	}

	render() {
		let { isLoading, temp, location } = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3>Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage location={ location } temp={ temp }/>;
			}
		}

		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={ this.handleSearch } />
				{ renderMessage() }
			</div>
		);
	}
}