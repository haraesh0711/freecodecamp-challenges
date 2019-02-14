// Initialize global variables
		var searchterm = "";
		var searchurl = "";
		var listhtml = "";
		var wikilink = "https://en.wikipedia.org/wiki?curid="; // For simplification. In my opinion anyway... Calls a specific Wikipedia page with the specified page ID.
		// Function triggered when search button is clicked
		$("#strigger").click(function(){
  			if(document.getElementById("sbox").value == "") {
   				alert("Please enter a search term first."); // NOTE: Make this an actual message box instead of an alert in the far future.
  			}
  			else {
    			searchterm = $("#sbox").val();
    			searchurl = "https://cors-anywhere.herokuapp.com/en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch="+searchterm; // Merges Wikipedia link with term to be searched.
    			$.getJSON(searchurl, function(obj) {
    				var result = obj.query["search"];
    				for(var i = 0; i < result.length; i++) {

    					listhtml += "<div class = search-drop><a href = "+wikilink+result[i].pageid+" target = _blank><h4>"+result[i].title+"</h4></a><br><span class = snippet-drop>"+result[i].snippet+"...</span></div><br>";
    				}
    				$("#search-list").html("<center><h3>Search Results</h3></center><br>"+listhtml);
    				// $("#search-list").html(JSON.stringify(result));
    			});
  			}
		});