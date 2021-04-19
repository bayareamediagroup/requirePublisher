define(['./jquery', './underscore', './vue',  './init'], function ($, _, Vue, init) {
    let xhr = new XMLHttpRequest();
    const baseURL = 'https://weather.ls.hereapi.com/weather/1.0/report.json?';
    const product = 'observation';
    const _apiKey = 'z5DpKECxcT9bjrURVyaR0qrWT94M5xgcxed12zU0rdc';
    const zipcode = 94606;
    var metric = false;

    var api = baseURL + "product=" + product + "&oneobservation=" + true + "&apiKey=" + _apiKey + "&zipcode=" + zipcode + "&metric=" + metric;

	xhr.onreadystatechange = function () {
		var scale = {fahrenheit: 'F', celsius: 'C'};
		if (this.readyState == 4 && this.status == 200) {
			const json = JSON.parse(this.responseText);
			const obj = Object.assign({}, json.observations.location[0].observation[0]);

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
					}
				},
				template: `<div v-on:click='change_scale'>{{scale}}</div>`
			})

			new Vue({
				el: "#app-4",
				data: {
					obj
				},
				methods: {
					units: function() {
						this.obj.daylight = 'PP'
					}
				}
			})

			// this is what i need to createElement
			//<button v-on:click="units">F</button>
			/*
			new Vue({
				el: 'observation',
				data: {
					message: this.getMetric()
				},
				methods: {
					makeCall: function () {
						let xhr = new XMLHttpRequest();

						xhr.onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {
								const json = JSON.parse(this.responseText);
								const obj = Object.assign({}, json.observations.location[0].observation[0]);
							}
						};

						xhr.open("get", this.api, true)
						xhr.send();
					}

				}
			})
			*/
		}
	};

    xhr.open("get", api, true)
    xhr.send();
});