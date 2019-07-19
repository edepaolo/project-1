
// ===== KEYS =========================================================
var myClarifaiApiKey = 'b24eb56b7a5c47ecb9873c2bdb89b9cd';
var app = new Clarifai.App({apiKey: myClarifaiApiKey});


// VARIABLES:
// =======================================================================

// FOOD CATEGORIES - WILL ALLIGN TO IMAGE (FOOD TAG)
const food = {
    bread: 'hip hop',
    bun: 'rock',
    frenchfries: 'rock',
    vegetables: 'adele'
}

//SELECTS RANDOM ARTIST/GENERE TO ASSIGN TO PREDECTION
const musicFind = ['jack johnson', 'jason mraz', 'grateful dead', 'dave mathews', 'wale', 'drake', 'mariah carey', 'frank sinatra',  'coldplay', 'lana del rey', 'u2', 'kanye west', 'train', 'red hot chili peppers' ];
const musicFindRandom = musicFind[Math.floor(Math.random()*musicFind.length)];
const musicNoSpace = musicFindRandom.replace(/\s/g,'');
console.log('random music:', musicFindRandom);
console.log('no space:', musicNoSpace);



//FUNCTIONS:
//==================================================================================

/*
  Purpose: Pass information to other helper functions after a user clicks 'Predict'
  Args:
    value - Actual filename or URL
    source - 'url' or 'file'
    */
function predict_click(value, source) {
  var preview = $(".food-photo");
  var file    = document.querySelector("input[type=file]").files[0];
  //var loader  = "https://s3.amazonaws.com/static.mlh.io/icons/loading.svg"; //spinning circle, added visual while waiting
  var reader  = new FileReader();

  // load local file picture 
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
        console.log(response.rawData.outputs[0].data.hasOwnProperty("concepts"));
        var tag = response.rawData.outputs[0].data.concepts[0].name;  // clariai will determine pic is vegetable
        //var url = 'https://api.audd.io/findLyrics/?q='+food[tag.replace(/\s/g,'')] //LOOKS UP AGAINST OBJECT ARRAY
        var url = 'https://api.audd.io/findLyrics/?q='+musicNoSpace; //using math random 


    console.log(tag); 
    //console.log(food[tag.replace(/\s/g,'')])
    console.log(url);

    //AJAX ALL TO AUDD - PULL MUSIC RELATED TO CLARIFA RESULTS
    $.ajax({
        url: url,
        method: "GET"
    })
    .then(function(auddResponse) {

        var allResponse = auddResponse.result;
        console.log(allResponse);

             // LOOP THROUGH RESPONSE - ONLY PROVIDE 3 FOR PLAYLIST
            for (var i = 0; i < 3; i++) {
                var tTitleResults = allResponse[i].title;
                var tArtistResults = allResponse[i].artist;

                console.log('titleResults', tTitleResults);
                console.log('artistResults', tArtistResults);

                var newRow = $("<tr>").append(
                    $("<td>").text(tTitleResults), 
                    $("<td>").text(tArtistResults)  
                );
        
                $("#playlist-table > tbody").append(newRow);

            }

    }).catch(function(error){
        console.log(error);
    }
    )

    }
    }, function(err) { console.log(err); }
);
}
