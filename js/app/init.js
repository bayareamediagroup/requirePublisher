define(['./jquery', './underscore'], function ($, _) {
    var wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    wrapper.style = "background-color: #4f94d4; border-radius: 5px; height: 300px; width: 320px; padding: 10px;";

    var location_wrapper = document.createElement('div');
    location_wrapper.id = 'location';
    location_wrapper.innerHTML = '{{location}}';
    location_wrapper.style = 'color: #000; font-size: 20px;';

    var current_wrapper = document.createElement('span');
    current_wrapper.id = 'current';
    current_wrapper.innerHTML = '{{temperature}}' + '&deg&nbsp;';
    current_wrapper.style = 'color: #fff; font-size: 20px;';

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
    forecast_wrapper.style = "font-style: italic;";

    document.getElementById('wx').appendChild(wrapper);
    document.getElementById('wrapper').appendChild(location_wrapper);
    document.getElementById('wrapper').appendChild(current_wrapper);
    document.getElementById('wrapper').appendChild(scale);
    document.getElementById('wrapper').appendChild(date_wrapper);
    document.getElementById('wrapper').appendChild(observations_wrapper);
    document.getElementById('wrapper').appendChild(forecast_wrapper);
    document.getElementById('wrapper').appendChild(list_wrapper);
    const menu = document.querySelector("#jq");
    menu.innerHTML = "query";
});