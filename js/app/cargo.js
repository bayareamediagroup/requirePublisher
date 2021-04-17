define(['./jquery', './underscore', './vue',  './init'], function ($, _, Vue, init) {
    let xhr = new XMLHttpRequest();
    const baseURL = 'https://weather.ls.hereapi.com/weather/1.0/report.json?';
    const product = 'observation';
    const _apiKey = 'z5DpKECxcT9bjrURVyaR0qrWT94M5xgcxed12zU0rdc';
    const zipcode = 94606;
    const metric = false;

    var api = baseURL + "product=" + product + "&oneobservation=" + true + "&apiKey=" + _apiKey + "&zipcode=" + zipcode + "&metric=" + metric;

	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			const json = JSON.parse(this.responseText);
			const obj = Object.assign({}, json.observations.location[0].observation[0]);

			new Vue({
				el: '#location',
				data: {
					location: obj.city + ", " + obj.state
				}
			})

			new Vue({
				el: '#current',
				data: {
					temperature: obj.temperature 
				}
			})
		}
	};

    xhr.open("get", api, true)
    xhr.send();
});