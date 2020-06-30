var apiKey = '&appid=3da50d1959a8dcca20cb2ff157bb0a73';

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
	document.getElementById('nameSubmit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var zip = document.getElementById('zip').value;
		var city = document.getElementById('city').value;
		var country = document.getElementById('country').value;
		var openWeatherMapZipUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
		var openWeatherMapCityUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
		var fullUrl;

		if (country != ''){
			if (zip === '' || zip.length < 5){
				fullUrl = openWeatherMapCityUrl + city + ',' + country + apiKey + '&units=imperial';
			} else {
				fullUrl = openWeatherMapZipUrl + zip + ',' + country + apiKey + '&units=imperial';
			}

			req.open('GET', fullUrl, true);
			req.addEventListener('load', function(){
				if (req.status >= 200 && req.status < 400){
					var response = JSON.parse(req.responseText);
					document.getElementById('cityResults').textContent = response.name;
					document.getElementById('tempResults').textContent = response.main.temp + '°F';
					document.getElementById('humidResults').textContent = response.main.humidity + '%';

				} else {
					console.log('Error in the network request: ' + req.statusText);
				};
			});
			req.send(null);
			event.preventDefault();

		} else {
			alert('Error! Missing country code (ex: US)');
		};
	});
};