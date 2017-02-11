//npm install axios --save
import axios from 'axios';
// var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=943eb85124d82f329d069e7bbc32da91';

module.exports = {
	getTemp(location) {
		let encodedLocation = encodeURIComponent(location);
		let requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestURL).then(res => {
			debugger;
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, res => {
			throw new Error(res.data.message);
		});
	}
}