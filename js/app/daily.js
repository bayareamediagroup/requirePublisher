define(['./jquery', './underscore', './vue', './init'], function ($, _, Vue, init) {
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
                template: `<ul>
                                <li v-for="item in forecast">
                                    <div>{{item.highTemperature.slice(0,2)}}&deg; -> {{item.description}}</div>
                                    <div><img v-bind:src="item.iconLink"></div>
                                </li>
                           </ul>`
            })
            /*

            new Vue({
                el: '#current',
                data: {
                    temperature: obj.temperature.slice(0, 2)
                }
            })

            new Vue({
                el: '#scale',
                data: {
                    scale: scale.fahrenheit
                },
                methods: {
                    change_scale: function () {
                        this.scale = scale.celsius
                    }
                },
                template: `<span v-on:click='change_scale'>{{scale}}</span>`
            })

            new Vue({
                el: '#dte',
                data: {
                    local: new Date().toLocaleString()
                }
            })

            new Vue({
                el: "#app-4",
                data: {
                    obj
                },
                methods: {
                    units: function () {
                        this.obj.daylight = 'PP'
                    }
                }
            })
            */
        }
    };

    xhr.open("get", api, true)
    xhr.send();
});