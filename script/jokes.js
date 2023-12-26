// Fetches a random joke upon click
// Used an open API with no authentication necessary

function fetchJokeAndDisplay() {
    const url = "https://official-joke-api.appspot.com/random_joke";
    fetch(url)
    .then(function(response){
         if(response.ok){
             return response.json();
         } else {
             throw new Error(Error);
         }
     }).then(function(data){
        const jokeLocation = document.getElementById('random-joke');
         jokeLocation.innerHTML = ''; // Clear previous joke
         
         const jokeText = document.createElement('p');
         const jokePunch = document.createElement('p');
         jokeText.textContent = `- ${data.setup}`;
         jokePunch.textContent = `- ${data.punchline}`;
         jokeLocation.appendChild(jokeText);
         jokeLocation.appendChild(jokePunch);
     }).catch(function(error){
         console.log(error);
     });
}
const jokeBtn = document.getElementById('joke-button');
jokeBtn.addEventListener("click", function() {
    fetchJokeAndDisplay();
});

fetchJokeAndDisplay();