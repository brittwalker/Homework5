//Wait for doc to be ready until loading js
$(document).ready(function () {
//on the click of the submit button, do the following
$("#submit-btn").click(function(event){
  //don't submit the form!
  event.preventDefault();
  //take away any extra classes from setting the attr previously
    $("body").removeClass("nyc");
    $("body").removeClass("sf");
    $("body").removeClass("la");
    $("body").removeClass("austin");
    $("body").removeClass("sydney");
  //declare city variable to store input
    var city;
  //match the variable value against a set of conditions
    city = $("#city-type").val();
    if (city === "NYC"||city === "New York"||city === "New York City"){
      //what to do when there's a match - change the first class associated with "body"
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
    //adding a little extra so ppl don't get confused when they put in a different city
    $("#comingsoon").hide();
  } else {
    $("#comingsoon").show();
  }
});

});
