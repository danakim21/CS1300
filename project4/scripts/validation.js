$(document).ready(function () {

    console.log("validation.js");


    // when user select category 1
    $("#c1").on("click", function() {
 	    console.log("c1 selected");
        $(".form-menu1").removeClass("hidden");
        $(".form-menu2").addClass("hidden");
        $(".form-menu3").addClass("hidden");
        $(".form-menu4").addClass("hidden");
    });

    // when user select category 2
    $("#c2").on("click", function() {
     	console.log("c2 selected");
        $(".form-menu2").removeClass("hidden");
        $(".form-menu1").addClass("hidden");
        $(".form-menu3").addClass("hidden");
        $(".form-menu4").addClass("hidden");
    });

    // when user select category 3
    $("#c3").on("click", function() {
    	console.log("c3 selected");
        $(".form-menu3").removeClass("hidden");
        $(".form-menu2").addClass("hidden");
        $(".form-menu1").addClass("hidden");
        $(".form-menu4").addClass("hidden");
    });

    $("#c4").on("click", function() {
    	console.log("c4 selected");
        $(".form-menu4").removeClass("hidden");
        $(".form-menu2").addClass("hidden");
        $(".form-menu1").addClass("hidden");
        $(".form-menu3").addClass("hidden");
    });


  // when user submits form
  $("#pre-order-form").on("submit", function() {
    // Assume that the form input is valid.
    var valid = true;
    console.log(valid);

    // Name
    if ( $("#name").prop("validity").valid ) {
      $("#nameError").addClass("hidden");
    } else {
      $("#nameError").removeClass("hidden");
      valid = false;
    };

    // Phone number
    if ( $("#phone").prop("validity").valid ) {
      $("#phoneError").addClass("hidden");
    } else {
      $("#phoneError").removeClass("hidden");
      valid = false;
    };

    // Pick-up Time
    if ( $("#time").prop("validity").valid ) {
      $("#timeError").addClass("hidden");
    } else {
      $("#timeError").removeClass("hidden");
      valid = false;
    };

    // Tell the browser whether the form is valid (sent form data to server).
    return valid;
  });

    $("#request-form").on("submit", function() {

        var formValid = true;

        if( $("#request-food").prop("validity").valid ) {
            $("#request-food-error").addClass("hidden");
        } else {
            $("#request-food-error").removeClass("hidden");
            formValid = false;
        }

        if( $("#request-price").prop("validity").valid ) {
            $("#request-price-error").addClass("hidden");
        } else {
            $("#request-price-error").removeClass("hidden");
            formValid = false;
        }
        return formValid;

    });



});
