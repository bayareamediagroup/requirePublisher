requirejs.config({
	baseUrl: 'js/app',
	paths: {
		cargo: 'cargo',
		daily: 'daily',
		init: 'init',
//		map: 'mapbox',
		mapbox: 'https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl',
		bootstrap: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min',
		jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min',
		underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min',
		vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue'
	},
	shim: {
		underscore: {
			exports: '_'
		}
	}
});

requirejs([
	'cargo',
	'daily',
	'init',
//	'map',
	'mapbox',
	'jquery',
	'underscore',
	'vue'
]);
