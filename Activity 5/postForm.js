document.addEventListener('DOMContentLoaded', postFunc);

function postFunc(){
	document.getElementById('submit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var myObj = {name:null, password:null};

		myObj.name = document.getElementById('name').value
		myObj.password = document.getElementById('password').value

		req.open('POST', 'http://httpbin.org/post', true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load', function (){
			if (req.status >= 200 && req.status < 400) {
				var response = JSON.parse(JSON.parse(req.responseText).data);
				document.getElementById('name_post').textContent = response.name;
				document.getElementById('password_post').textContent = response.password;
			} else {
				console.log('Error in network: ' + req.statusText);
			};
		});
		req.send(JSON.stringify(myObj));
		event.preventDefault();
	});
};