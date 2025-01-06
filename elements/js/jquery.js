$(document).ready(function() {
    var newParagraph = "You clicked the other paragraph; and this response was made possible through the power of jQuery!";
    //basic event response function
    $("#output").on("click", function() {
        console.log(newParagraph);
    });

    $("#secretButton").on("click", function() {
        $("#jQueryOutput").toggleClass("hidden");
    });
});