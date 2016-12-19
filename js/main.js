$(document).ready(function () {

$("#submit-btn").click(function(event){
  event.preventDefault();
    $("body").removeClass("nyc");
    $("body").removeClass("sf");
    $("body").removeClass("la");
    $("body").removeClass("austin");
    $("body").removeClass("sydney");
    var city;
    city = $("#city-type").val();
    if (city === "NYC"||city === "New York"||city === "New York City"){
    $("body").attr("class","nyc");
    $("#comingsoon").hide();
  } else if(city === "San Francisco"||city === "SF"||city === "Bay Area"){
    $("body").attr("class","sf");
    $("#comingsoon").hide();
  } else if(city === "Los Angeles"||city === "LA"||city === "LAX"){
    $("body").attr("class","la");
    $("#comingsoon").hide();
  } else if(city === "Austin"||city === "ATX"){
    $("body").attr("class","austin");
    $("#comingsoon").hide();
  } else if(city === "Sydney"||city === "SYD"){
    $("body").attr("class","sydney");
    $("#comingsoon").hide();
  } else {
    $("#comingsoon").show();
  }
});

});
