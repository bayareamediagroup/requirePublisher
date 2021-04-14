requirejs.config({
	baseUrl: 'js/app',
	paths: {
		jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min',
		underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min',
		cargo: 'cargo',
		helper4: 'helper4',
		helper5: 'helper5'
	},
	shim: {
		underscore: {
			exports: '_'
		}
	}
});

requirejs(['jquery', 'underscore', 'cargo', 'helper4', 'helper5']);
