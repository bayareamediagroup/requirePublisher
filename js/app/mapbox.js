define(['./mapbox'], function(mapbox) {
	mapbox.accessToken = 'pk.eyJ1IjoiYmluYXJ5dGhpbmtlciIsImEiOiJjaW9ocmhpanUwMDhxdHNtMXA0bjdoYnd3In0.1fLJ9SuR3rSW8lueJeaurg';

	new mapbox.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [-74.5, 40],
		zoom: 9
	});
});
