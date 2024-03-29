// Select the button and the image
const fetchButton = document.getElementById('fetch-button');
const pokemonImage = document.getElementById('pokemonSprite');

// Add click event listener to the button

// Define the API URL
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Define the function to fetch data from the API
async function fetchData() {
  try {
    // Get the Pokemon name from the input
    const pokemonName = document.getElementById('poke-name').value.toLowerCase();

    // Construct the API URL with the Pokemon name
    const url = `${apiUrl}${pokemonName}`;

    // Fetch data from the API
    const response = await fetch(url);

    // If the response is not OK, throw an error
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Get the Pokemon sprite image URL
    const pokemonSprite = data.sprites.front_default;

    // Set the image source and display it
    pokemonImage.src = pokemonSprite;
    pokemonImage.style.display = 'block';

    // Log the data to the console for debugging
    console.log(data);
  } catch (error) {
    // Log the error to the console
    console.log(error);

    // Display an alert to the user with the error message
    alert(error.message);
  }
}

fetchButton.onclick(fetchData());
