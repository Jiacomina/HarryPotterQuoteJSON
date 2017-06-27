var jsonFile = [];
var id = -1;
$.getJSON('./whaleFacts.json=?', function(json) {
	jsonFile = json;
});
function getFact() {
	var nFacts = jsonFile.length;
	var randomNum = 0;
	randomNum = Math.floor(Math.random() * nFacts);
	$(".quote").html(JSON.stringify(jsonFile[randomNum].Quote));
	id = randomNum;
}

$(document).ready(function() {
	$("#quote-button").on("click", function(event) {
		getFact();
	});
	
	$("#like").on("click", function(event){
		if(id != -1){
			console.log("liked: " + id);
			json(id).likes++;
			id = -1;
		}
	});
	$("#dislike").on("click", function(event){
		if(id != -1){
			console.log("disliked: " + id);
			json(id).dislikes++;
			id = -1;
		}
	});
});

/*	
	https://api.myjson.com/bins/18yq43.json?
	*/