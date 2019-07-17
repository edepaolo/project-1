var myClarifaiApiKey = 'b24eb56b7a5c47ecb9873c2bdb89b9cd';
var myWolframAppId = 'PLUY24-GJAY2APWLH';

var app = new Clarifai.App({apiKey: myClarifaiApiKey});

// VARIABLES:
// =======================================================================

// FOOD CATEGORIES
var carb = ["bread", "bun", "pasta"];
var protien = ["steak", "fish", "rib eye", "clam", "lobster"];
var dairy = ["milk", "cheese"];
var fruitVeg = ["tomato", "potato", "orange", "strawberry", "banana", "peach"];
var fatSugar = ["hamburger", "hot dog", "french fries"];

//SWTICHING TO: index of
//must use parimeter of tag
function foodCategory () {
    var tag = [];
    var foodChoices = ["carb", "protien", 'dairy', 'fruitVeg', 'fatSugar']; 
    document.write(array.indexOf(tag))
    console.log('fatSugar', foodCategory());
}

/*
  Purpose: Pass information to other helper functions after a user clicks 'Predict'
  Args:
    value - Actual filename or URL
    source - 'url' or 'file'
    */
function predict_click(value, source) {
  var preview = $(".food-photo");
  var file    = document.querySelector("input[type=file]").files[0];
  var loader  = "https://s3.amazonaws.com/static.mlh.io/icons/loading.svg"; //spinning circle, added visual while waiting
  var reader  = new FileReader();

  // load local file picture -- can remove?
  reader.addEventListener("load", function () {
    preview.attr('style', 'background-image: url("' + reader.result + '");');
    doPredict({ base64: reader.result.split("base64,")[1] }); //base64=pulling in bianary object and keeping intact (image), reader=reads the blob(image)
  }, false);

  if (file) {
    reader.readAsDataURL(file);
    $('#concepts').html('<img src="' + loader + '" class="loading" />');
} else { alert("No file selcted!"); }
}

/*
  Purpose: Does a v2 prediction based on user input
  Args: 
    value - Either {url : urlValue} or { base64 : base64Value }
*/
function doPredict(value) {
app.models.predict(Clarifai.FOOD_MODEL, value).then(function(response) {
    if(response.rawData.outputs[0].data.hasOwnProperty("concepts")) {
        var tag = response.rawData.outputs[0].data.concepts[0].name;  // clariai will determine pic is vegetable
       // var url = 'http://api.wolframalpha.com/v2/query?input='+tag+'%20nutrition%20facts&appid='+myWolframAppId; //tag = vegetable
    console.log(tag);
    foodCategory();
    console.log(foodCategory());




//dont need because we ware not getting nutritional info
        getNutritionalInfo(url, function (result) {
        $('#concepts').html('<h3>'+ tag + '</h3>' + "<img src='"+result+"'>");
        });

//PUT STATEMENT TO COMPARE 'TAG' to food group



    }
    }, function(err) { console.log(err); }
);
}
