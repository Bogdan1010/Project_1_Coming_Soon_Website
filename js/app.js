$( document ).ready(function() {
    console.log("ready");
    var countDownDate = new Date("Sep 5, 2019 15:37:25").getTime();
    setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = days + ": " + hours + ": "
    + minutes + ": " + seconds + " ";
    }, 1000);

    $("#newsletter").hide();
    $("#form").hide();
    $("#cowntdown-container").click(function(){
        $(this).slideUp(1300);
        $("#newsletter").slideDown(1300);
    });

    $("#contact").click(function(){
        $("#newsletter").slideUp(1300);
        $("#form").slideDown(1300);
    });

    $(".home").click(function(){
        $("#newsletter").slideUp(1300);
        $("#form").slideUp(1300);
        $("#cowntdown-container").slideDown(1300);
    });

    $("i").click(function(){
        $("#newsletter").slideUp(1300);
        $("#form").slideUp(1300);
        $("#cowntdown-container").slideDown(1300);
    });


});