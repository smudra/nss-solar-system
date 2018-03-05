const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

const planetEl = document.getElementById("planets");
var planetArray = document.getElementById("planet-array");
var filterPlanets = document.getElementById("planet-filter");
let sentence = document.getElementById("sentence");
const newSentence = (allwords, currWord) => allwords + " " + currWord;

planets.forEach(function(planet) {
    planetEl.innerHTML += `<ul><li>${planet}</li></ul>`;
    console.log("What's planet showing ", planet);

});

    /*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.
    */
    planets.map(function upperCaseLetter(planet){
     planetArray.innerHTML += `<p>` + planet.charAt(0).toUpperCase()  + planet.slice(1) + `<br></p>`;
    });

    /*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()` method on strings.
    */

    filterPlanets.innerHTML = planets.filter(planet => planet.includes("e"));

    // Use the reduce method to create a sentence from the words in the following array
    sentence.innerHTML = words.reduce(newSentence);

    console.log("What's in sentence? ", words.reduce(newSentence));