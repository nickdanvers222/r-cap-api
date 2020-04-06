const axios = require('axios')

const getRecipes = async (API_KEY, results, time, cuisine, intolerances, pantry, allergies, diet) => {
    
    intolerances === undefined || intolerances === null || intolerances.length === 0 ? intolerances = null : intolerances = intolerances.join(","); // This should be an array
    allergies === null || allergies === undefined ? allergies = null : allergies = allergies.trim()   // This should be a string
    diet === null || diet === undefined || diet === 'Any' ? diet = null : diet = diet   // This should be a string
    cuisine === 'Any' || cuisine ===undefined  ? cuisine = null : cuisine = cuisine  // This should be a string
    time === 'Any' || time === undefined  ? time = 300 : time = time.slice(0,2)   
   
    
    let result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${results.join(",+")}&instructionsRequired=true&excludeIngredients=${allergies}&fillIngredients=true&intolerances=${intolerances}&addRecipeInformation=true&cuisine=${cuisine}&diet=${diet}&maxReadyTime=${time}&ignorePantry=${pantry}&number=5&apiKey=${API_KEY}`)
    .then(result => result.data.results)
    .catch(err => console.log(err))
    return result;
}

module.exports = getRecipes;