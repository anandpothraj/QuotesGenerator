import { MY_API_KEY } from './config.js';

fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": MY_API_KEY
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
    document.getElementById('quote').innerHTML = response.content;
    document.getElementById('author').innerHTML = " ___"+response.originator.name;
})
.catch(err => {
	console.error(err);
});