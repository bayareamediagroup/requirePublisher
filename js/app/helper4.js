define(['jquery', 'underscore'], function ($, _) {
    $("#hourly").click(function (event) {
        alert("hourly forecast");
    });

    let list = ['black', 'women', 'rock'];

    let i = 0;

    _.each(list, function(json) {
        console.log("=>", json);
        i += 1;
    });
});