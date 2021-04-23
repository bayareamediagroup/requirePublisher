define(['./jquery', './underscore', './vue', './init'], function($, _, Vue, init) {

    this.metric = true;

    function makeRequest() {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const json = JSON.parse(this.responseText);
                const obj = Object.assign({}, json.observations.location[0].observation[0]);
            }
        };

        xhr.open("get", this.api, true)
        xhr.send();
    }

    return {
        getMetric:function() {
            return makeRequest();
        }
    };

});