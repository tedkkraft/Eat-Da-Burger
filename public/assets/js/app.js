$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#newBurger").val().trim()
        };

        //POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        );
    });


    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");
        var confirmDevour = $(this).data("newDevour") === false;

        var confirmDevourState = {
            devour: confirmDevour
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: confirmDevourState
        }).then(
            function() {
                location.reload();
            }
        );
    });

}) 