define(['./jquery', './underscore', './init'], function ($, _, init) {
    let xhr = new XMLHttpRequest();
    const baseURL = 'https://weather.ls.hereapi.com/weather/1.0/report.json?';
    const product = 'observation';
    const _apiKey = 'z5DpKECxcT9bjrURVyaR0qrWT94M5xgcxed12zU0rdc';
    const zipcode = 94606;
    const metric = false;

    var api = baseURL + "product=" + product + "&oneobservation=" + true + "&apiKey=" + _apiKey + "&zipcode=" + zipcode + "&metric=" + metric;

    var _current = document.getElementById('current');
    var _list = document.getElementById('list');
    var _item = document.getElementById('item');

	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {

			const json = JSON.parse(this.responseText);
			_current.innerHTML = json.observations.location[0].city + ", " + json.observations.location[0].state;

			var template = _.template("<%= name %>", { name: 'Patrick Mims' });
			var names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
			var list = [];
			var i = 0;

			for(var i = 0; i < names.length; i++) {
				//list.push(template({ name: names[i] }));
				_item.innerHTML += '<div>' + template({ name: names[i] }) + '</div>';
			}

			//_item.innerHTML = list;
			
			var obj = Object.assign({}, json.observations.location[0].observation[0]);

			_.each(obj, function(json) {
				console.log("console: ", obj.ageMinutes);
			});
		}
	};

    xhr.open("get", api, true)
    xhr.send();
});
