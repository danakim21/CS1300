$(document).ready(function (){
    var current = new Date();
    current_time = current.getTime();

    var minutes = current.getMinutes();
    var hours = current.getHours();

    console.log("hello");
    if (hours < 11 || hours == 11 && minutes <= 30 || hours >= 22 ) {
        $("#open").css("background-color", "red");
        $("#open").html("Closed");
        console.log("hello");
    } else{
        $("#open").css("background-color", "green");
        $("#open").html("Open");
    }

    // var propmap = {
    //     center: new google.maps.LatLng(42.442366,-76.485931);
    //     zoom: 5;
    // }
    // $("#googlemap").googleMaps(propmap);

})

$(document).ready(function () {

    $("#category1-button").on("click", function() {
        console.log("Category 1 Selected");
        $(".category1").removeClass("hidden");
        $(".category1").addClass("current-menu-button");
    });

    $("#category2-button").on("click", function() {
        console.log("Category 2 Selected");
        $(".category1").addClass("hidden");
        $(".category2").removeClass("hidden");
    });

    $("#category3-button").on("click", function() {
        console.log("Category 3 Selected");
        $(".category1").addClass("hidden");
        $(".category3").removeClass("hidden");
    });

    $("#category4-button").on("click", function() {
        console.log("Category 4 Selected");
        $(".category1").addClass("hidden");
        $(".category4").removeClass("hidden");
    });

    $("#category5-button").on("click", function() {
        console.log("Category 5 Selected");
        $(".category1").addClass("hidden");
        $(".category5").removeClass("hidden");
    });


});
