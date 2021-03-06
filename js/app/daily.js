define(['./bootstrap', './jquery', './underscore', './vue', './init'], function (bootstrap, $, _, Vue, init) {
    let xhr = new XMLHttpRequest();
    const baseURL = 'https://weather.ls.hereapi.com/weather/1.0/report.json?';
    const product = 'forecast_7days_simple';
    const _apiKey = 'z5DpKECxcT9bjrURVyaR0qrWT94M5xgcxed12zU0rdc';
    const zipcode = 94606;

    var obj = {};
    var metric = false;

    const api = baseURL + "product=" + product + "&apiKey=" + _apiKey + "&zipcode=" + zipcode + "&metric=" + metric;

    const scale = { fahrenheit: 'F', celsius: 'C' };

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const json = JSON.parse(this.responseText);
            Object.assign(obj, json.dailyForecasts.forecastLocation.forecast);

            new Vue({
                el: '#fct',
                data: {
                    forecast: obj
                },
                methods: {
                    something: function () {
                        console.log("I am clicked");
                    }
                },
                template: `<div>
                            <div>Daily Forecast</div>
                            <br/>
                            <div class="row no-gutters"><span v-for="(item, index) in forecast" v-if="index < 6" class="col-2" style="text-align: center">{{item.weekday.slice(0, 3)}}<br/><img @click="something" v-bind:src="item.iconLink" style="height: 30px"><br/>{{item.highTemperature.slice(0,2)}}&deg;<br/></span></div><br/></div>`
            })

            Vue.component('city-component', {
                props: ['cty'],
                template: '<div>{{ cty.daylight }}</div>'
            })

            new Vue({
                el: '#todo',
                data: {
                    todo: obj
                }
            })
        }
    };

    xhr.open("get", api, true)
    xhr.send();
});
