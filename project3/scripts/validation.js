$(document).ready(function () {

    $("#visitForm").on("submit", function() {

        var formValid = true;

        if( $("#request-name").prop("validity").valid ) {
            $("#request-name-error").addClass("hidden");
        } else {
            $("#request-name-error").removeClass("hidden");
            formValid = false;
        }

        if( $("#request-number").prop("validity").valid ) {
            $("#request-number-error").addClass("hidden");
        } else {
            $("#request-number-error").removeClass("hidden");
            formValid = false;
        }

        if( $("#request-email").prop("validity").valid ) {
            $("#request-email-error").addClass("hidden");
        } else {
            $("#request-email-error").removeClass("hidden");
            formValid = false;
        }

        if( $("#request-people").prop("validity").valid ) {
            $("#request-people-error").addClass("hidden");
        } else {
            $("#request-people-error").removeClass("hidden");
            formValid = false;
        }

        return formValid;
    });

    $("#foodForm").on("submit", function() {

        var formValid = true;

        if( $("#request-name").prop("validity").valid ) {
            $("#request-name-error").addClass("hidden");
        } else {
            $("#request-name-error").removeClass("hidden");
            formValid = false;
        }

        if( $("#request-number").prop("validity").valid ) {
            $("#request-number-error").addClass("hidden");
        } else {
            $("#request-number-error").removeClass("hidden");
            formValid = false;
        }

        if( $("#request-email").prop("validity").valid ) {
            $("#request-email-error").addClass("hidden");
        } else {
            $("#request-email-error").removeClass("hidden");
            formValid = false;
        }

        if( $("#request-food-number").prop("validity").valid ) {
            $("#request-food-number-error").addClass("hidden");
        } else {
            $("#request-food-number-error").removeClass("hidden");
            formValid = false;
        }

        return formValid;
    });

});
