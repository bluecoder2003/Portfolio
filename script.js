$(document).ready(function() {
    $("button").click(function () {
        if ($("button").length > 0) {
            $("button").toggleClass("active");
        } else {
            console.error("No button elements found.");
        }

        if ($(".title").length > 0) {
            $(".title").toggleClass("active");
        } else {
            console.error("No elements with class 'title' found.");
        }

        if ($("nav").length > 0) {
            $("nav").toggleClass("active");
        } else {
            console.error("No nav elements found.");
        }
    });
});