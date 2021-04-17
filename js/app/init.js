define(['./jquery', './underscore'], function ($, _) {
    var wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    wrapper.style = "background-color: #4f94d4; border-radius: 5px; height: 300px; width: 300px;padding: 10px;";

	var location_wrapper = document.createElement('div');
	location_wrapper.id = 'location';
    location_wrapper.innerHTML = '{{location}}';

    var current_wrapper = document.createElement('div');
    current_wrapper.id = 'current';
    current_wrapper.style = 'color: #fff; font-size: 20px;';

	var list_wrapper = document.createElement('div');
	list_wrapper.id = 'list';
    list_wrapper.style = 'v-model="forecast"';

    document.getElementById('wx').appendChild(wrapper);
    document.getElementById('wrapper').appendChild(location_wrapper);
    document.getElementById('wrapper').appendChild(current_wrapper);
    document.getElementById('wrapper').appendChild(list_wrapper);
});
