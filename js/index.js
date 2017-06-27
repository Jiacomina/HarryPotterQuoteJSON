var jsonFile = [];
var id = -1;
var quote = null;
var nFacts;
$.getJSON('https://raw.githubusercontent.com/Jiacomina/WhaleFactsGenerator/master/whaleFacts.json?', function(json) {
	jsonFile = json;
});

// Ensures new quote is not same as previous
function newRandom(){
	if(nFacts != null){
		var randomNum = 0;
		randomNum = Math.floor(Math.random() * nFacts);
		if(randomNum == id) 
			return newRandom();
		else 
			return randomNum;
	}
}
function getFact() {
	nFacts = jsonFile.length;
	randomNum = newRandom();
	quote = JSON.stringify(jsonFile[randomNum].Quote);
	$(".quote").html(quote);
	id = randomNum;
	console.log(id);
}

$(document).ready(function() {
	$("#quote-button").on("click", function(event) {
		console.log("Button clicked");
		getFact();
		$(".twitter-share-button").css("visibility", "visible");
		$(".fb-share-button").css("visibility", "visible");
		$("#share-text").css("visibility", "visible");
	});
	
	$("#like").on("click", function(event){
		if(id != -1){
			console.log("liked: " + id);
			// jsonFile(id).likes++;
			// id = -1;
		}
	});
	$("#dislike").on("click", function(event){
		if(id != -1){
			console.log("disliked: " + id);
			// jsonFile(id).dislikes++;
			// id = -1;
		}
	});
	$("#google-button").on("click", function(event){
		var searchQuery = "https://www.google.com.au/search?q=" + quote.replace(/['"]/g, '');
		console.log(searchQuery);
		if(quote != ""){
			var win = window.open(searchQuery, '_blank');
  			win.focus();
		}
		
	});

});

/*	
	https://api.myjson.com/bins/18yq43.json?
	
*/