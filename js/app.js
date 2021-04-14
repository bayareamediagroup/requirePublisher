requirejs.config({
    baseUrl: 'js/app',
    paths: {
		jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min',
		underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min',
        payload: 'payload',
        helper3: 'helper3',
        helper4: 'helper4',
        helper4: 'helper5'
    },
	shim: {
		underscore: {
			exports: '_'
		}
	}
});

requirejs(['jquery', 'underscore', 'payload', 'helper3', 'helper4', 'helper5']); 

/*
require.config({
	baseUrl: 'app',
	paths: {
		backbone: '../node_modules/backbone/backbone',
		chart: '../node_modules/chartjs/chart',
		jquery: '../node_modules/jquery/dist/jquery',
		moment: '../node_modules/moment/dist/moment',
		underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min',
		vue: '../node_modules/vue/dist/vue',

		baseCollection: 'collections/baseCollection',
		baseModel: 'models/baseModel',
		baseRoute: 'routes/baseRoute',
		baseView: 'views/baseView',

		observationModel: 'models/observationModel',
		dailyModel: 'models/dailyModel',
		hourlyModel: 'models/hourlyModel',

		observationView: 'views/observationView',
		dailyView: 'views/dailyView',
		dailySummaryView: 'views/dailySummaryView',
		detailsView: 'views/detailsView',
		hourlyView: 'views/hourlyView',
		hourlyGridView: 'views/hourlyGridView',
		hourlyListView: 'views/hourlyListView',
		navigationView: 'views/navigationView',
		mapView: 'views/mapView',
		collectionView: 'views/collectionView',
		baseCollectionView: 'views/baseCollectionView',

		collection: 'collections/collection',

		route: 'routes/route',

		test: 'util/test'
	},

	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		chrartjs: {
			deps: ['moment']
		}
	}
})

define(['collectionView', 'collection', 'route', 'observationModel', 'dailyModel', 'hourlyModel'],
	function (collectionView, collection, route, observationModel, dailyModel, hourlyModel) {

		new route()
		Backbone.history.start()

		new collectionView({
			collection: new collection([
				new observationModel({metric: 'false', zipcode: '75201'}),
				new dailyModel({metric: 'false', zipcode: '75201'}),
				new hourlyModel({metric: 'false', zipcode: '75201'})
			])
		});
	}
);
*/
