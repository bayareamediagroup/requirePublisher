//define(['./jquery', './underscore', './init', './buildComponent'], function ($, _, init, bc) {
define(['./jquery', './underscore', './vue',  './init'], function ($, _, Vue, init) {
    let xhr = new XMLHttpRequest();
    const baseURL = 'https://weather.ls.hereapi.com/weather/1.0/report.json?';
    const product = 'observation';
    const _apiKey = 'z5DpKECxcT9bjrURVyaR0qrWT94M5xgcxed12zU0rdc';
    const zipcode = 94606;
    const metric = false;

    var api = baseURL + "product=" + product + "&oneobservation=" + true + "&apiKey=" + _apiKey + "&zipcode=" + zipcode + "&metric=" + metric;

    //var _location = document.getElementById('location');

	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			const json = JSON.parse(this.responseText);

			const city = json.observations.location[0].city;
			const state = json.observations.location[0].state;

			new Vue({
				el: '#location',
				data: {
					location: city + ", " + state
				}
			})
			
			var list = [];
			var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
			var observationObj = Object.assign({}, json.observations.location[0].observation[0]);

			var template = _.template("<%= day %>");

			for(var i = 0; i < days.length; i++) {
				_item.innerHTML += '<div>' + template({ day: days[i] }) + '</div>';
			}

			console.log("console: ", observationObj.ageMinutes);
		}
	};

    xhr.open("get", api, true)
    xhr.send();
});
