/* global $*/
$(document).ready(function() {
    $.getJSON("/api/todos")
        .then(function(data) {
            console.log(data); //check if it returns json
        })
        .catch(function(err) {
            console.log(err);
        })
});
