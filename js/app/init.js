define(['./bootstrap', './jquery', './underscore'], function (bootstrap, $, _) {
	var wrapper = document.createElement('div');
	wrapper.id = 'wrapper';
	wrapper.style = "background-color: #4f94d4; border-radius: 5px; height: 340px; width: 320px; padding: 10px;";

	var location_wrapper = document.createElement('div');
	location_wrapper.id = 'location';
	location_wrapper.innerHTML = '{{location}}';
	location_wrapper.style = 'color: #000; font-size: 20px;';

	var current_wrapper = document.createElement('span');
	current_wrapper.id = 'current';
	current_wrapper.innerHTML = '{{temperature}}' + '&deg&nbsp;';
	current_wrapper.style = 'color: #fff; font-size: 30px;';

	var observations_wrapper = document.createElement('div');
	observations_wrapper.id = 'observation';
	observations_wrapper.innerHTML = 'observations';

	var list_wrapper = document.createElement('div');
	list_wrapper.id = 'list';
	list_wrapper.style = 'v-model="forecast"';

	var scale = document.createElement('span');
	scale.id = 'scale';
	scale.style = 'color: #fff; font-size: 8px;';

	var date_wrapper = document.createElement('div');
	date_wrapper.id = 'dte';
	date_wrapper.style = "font-style: italic;";
	date_wrapper.innerHTML = 'Last updated {{local}}';

	var forecast_wrapper = document.createElement('div');
	forecast_wrapper.id = 'fct';

	var hourlyFCT = document.createElement('div');
	hourlyFCT.id = 'hourly'

	var change_location = document.createElement('div');
	change_location.id = 'changeLoc';
	change_location.style = "font-size: italic";
	change_location.innerHTML = "<br/><span v-on:click='change_location'>{{change}}</span>";

	var todo_wrapper = document.createElement('div');
	todo_wrapper.id = 'todo';
	todo_wrapper.innerHTML = "<city-component v-for='item in todo' v-bind:cty='item' v-bind:key='item.id'></city-component>";

	var mapbox_wrapper = document.createElement('div');
	mapbox_wrapper.id = 'map';
	mapbox_wrapper.style = "border-radius: 5px; height: 100px; width: 100%";

	var map_css = document.createElement('link');
	map_css.type = "text/css";
	map_css.rel = "stylesheet";
	map_css.href = "https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css";
	document.getElementsByTagName('head')[0].appendChild(map_css);

	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap-grid.min.css';

	document.getElementsByTagName("head")[0].appendChild(link);
	document.getElementById('wx').appendChild(wrapper);
	document.getElementById('wrapper').appendChild(location_wrapper);
	document.getElementById('wrapper').appendChild(current_wrapper);
	document.getElementById('wrapper').appendChild(scale);
	document.getElementById('wrapper').appendChild(date_wrapper);
	document.getElementById('wrapper').appendChild(observations_wrapper);
	document.getElementById('wrapper').appendChild(forecast_wrapper);
	document.getElementById('wrapper').appendChild(mapbox_wrapper);
	document.getElementById('wrapper').appendChild(change_location);
	document.getElementById('wrapper').appendChild(todo_wrapper);
	document.getElementById('wrapper').appendChild(list_wrapper);
});
