define(['jquery', 'underscore'], function ($, _) {

    $("#jq").click(function(event) {
        alert("Poor People");
    });

    let list = ['white', 'women', 'rock'];

    let i = 0;

    _.each(list, function(json) {
        console.log("=>", json);
        i += 1;
    });
});