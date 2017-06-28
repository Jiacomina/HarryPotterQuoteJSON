var jsonFile = [];
var id = -1;
var quote = "<b>Click to generate a new Whale Fact!<b>";
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
	id = randomNum;
	console.log(id);
}

$(document).ready(function() {
	$(".quote").html(quote);
	$(".quote-box").css('cursor','pointer')
	.click(function() {
		var el     = $(this),  
	    newone = el.clone(true);
	    $(".quote-box").css("opacity",0.9);
	    $(".quote").html("Echolocating...");
 		$(".quote-box").addClass('quote-box-shake');
		console.log("Button clicked");

		$(".quote-box").bind('animationend', function(){
			console.log("hi");
			getFact();
			$(".quote-box").css('cursor','pointer')
			$(".twitter-share-button").attr("href", "https://twitter.com/share?text="+ quote + " - Whale Fact Generator at &url=https://jiacomina.github.io/WhaleFactsGenerator&");
			el.before(newone);
			$(".quote-box:last").remove();
			$(".quote").html(quote);
    	});
		
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