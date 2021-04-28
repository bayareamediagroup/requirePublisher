define(['./jquery', './underscore', './mapbox', './vue', './init'], function ($, _, mapbox, Vue, init) {
	let xhr = new XMLHttpRequest();
	const baseURL = 'https://weather.ls.hereapi.com/weather/1.0/report.json?';
	const product = 'observation';
	const _apiKey = 'z5DpKECxcT9bjrURVyaR0qrWT94M5xgcxed12zU0rdc';
	const zipcode = 94606;

	var obj = {};
	var metric = false;

	const api = baseURL + "product=" + product + "&oneobservation=" + true + "&apiKey=" + _apiKey + "&zipcode=" + zipcode + "&metric=" + metric;
	const scale = { fahrenheit: 'F', celsius: 'C' };

	mapbox.accessToken = 'pk.eyJ1IjoiYmluYXJ5dGhpbmtlciIsImEiOiJjaW9ocmhpanUwMDhxdHNtMXA0bjdoYnd3In0.1fLJ9SuR3rSW8lueJeaurg';

	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			const json = JSON.parse(this.responseText);
			Object.assign(obj, json.observations.location[0].observation[0]);

			new Vue({
				el: '#location',
				data: {
					location: obj.city + ", " + obj.state.slice(0, 2).toUpperCase()
				}
			})

			new Vue({
				el: '#current',
				data: {
					temperature: obj.temperature.slice(0, 2)
				}
			})

			new Vue({
				el: '#scale',
				data: {
					scale: scale.fahrenheit
				},
				methods: {
					change_scale: function () {
						this.scale = scale.celsius
					},
					change_fahrenheit: function() { 
						this.scale = scale.fahrenheit
					}
				},
				template: `<span v-on:click='change_scale' v-show='change_fahrenheit'>{{scale}}</span>`
			})

			new Vue({
				el: '#dte',
				data: {
					local: new Date().toLocaleString()
				}
			})

			new Vue({
				el: '#changeLoc',
				data: {
					change: "Change Location" 
				},  
				methods: {
					change_location: function() {
						if(this.change == "Change Location") {
							this.change = "Oakland"
						} else if(this.change == "Oakland") {
							this.change = "Change Location"
						}
					}
				}
			})

			new mapbox.Map({
				container: 'map',
				style: 'mapbox://styles/mapbox/streets-v11',
				center: [obj.longitude, obj.latitude],
				zoom: 9
			})

		}
	}
	xhr.open("get", api, true)
	xhr.send();
});
