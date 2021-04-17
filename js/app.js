requirejs.config({
	baseUrl: 'js/app',
	paths: {
		jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min',
		underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min',
//		vue: 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.11/vue.cjs';


		vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue',
		init: 'init',
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

requirejs(['jquery', 'underscore', 'vue', 'cargo', 'helper4', 'helper5', 'init']);
