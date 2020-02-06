function loadData(){
    var request = new XMLHttpRequest();

    request.open('GET','http://restcountries.eu/rest/v2/all', true);

    request.onload = function(){
		var data = JSON.parse(this.response);
		console.log(data);
	}
    
	//Actually sending the API request
	request.send();
}
//Called the function to load the data initially
loadData();

    
