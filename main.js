function loadData(){
    var request = new XMLHttpRequest();

    request.open('GET', 'http://restcountries.eu/rest/v2/all', true);

    request.onload = function(){
        var list= "";

    }
    var data = JSON.parse(this.response);

    var countryMap = new Map();
    for(var i = 0; i < data.length; i++){
        var country = data[i];
        var alpha3Code = country.alpha3Code;
        countryMap.set(alpha3Code, country);
        list += "<a href='#'><div class= 'countries' value= '" + country.alpha3Code + "'>" + country.name +"</div></a>";
        document.getElementById('countries-list').innerHTML = list;

        document.querySelectorAll('.countries').forEach(item => {
			item.addEventListener("click", function(event)
			{
				//On click it is gonna display the country information
				document.getElementById("content-container").style.display = "block";

				//This is the country element that was clicked <div class="country" value="PAK"> pakistan </div>
				var ele = event.target;

				//This is the alpha3code for the country that was clicked
				var code = ele.getAttribute("value");
				
				//Retrieval of country object via searching the country map by the alpha3code
				var country= countryMap.get(code);

				//Set all the values for html elements.
				document.getElementById("country-name").innerHTML =  country.name;
				document.getElementById("country-capital").value =  country.capital;
				document.getElementById("country-region").value = country.region;
				document.getElementById("country-subregion").value = country.subregion;
				document.getElementById("country-name-span").innerHTML = country.name;
				document.getElementById("calling-code-span").innerHTML = country.callingCodes;
				
				// Iterating thru an array of objects for currencies
				for(var i = 0; i < country.currencies.length; i++){
					document.getElementById("currencies-span").innerHTML = country.currencies[i].name;
				}
				//Creating a variable to store all the names of supported language for the country.
				var langs = [];
				//Iterateing thru the list of languages
				for(var i = 0; i < country.languages.length; i++){
					langs.push(country.languages[i].name);
				}

				document.getElementById("languages-span").innerHTML = langs.join();

			})
		})


	}
	//Actually sending the API request
	request.send();
}
//Called the function to load the data initially
loadData();

    }
}