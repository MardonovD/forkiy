const { async } = require('regenerator-runtime');

// import icons from 'url:../img/icons.svg';
import { loadRecipe, state, searchResults } from './model.js';
import recipeView from './views/recipeView';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.loadingSpinder();
    await loadRecipe(id);
    const data = state.recipe;

    // renderHtml(state);

    console.log(state);

    recipeView.render(data);

    return data;
  } catch (error) {
    recipeView.error();
    throw error;
  }
};

const searchController = async function () {
  const inputValue = searchView.getQuery();
  searchResults(inputValue);

  const data = await state.search.results;

  resultsView.render(data);

  console.log(inputValue);
};

searchView.addHandlerEvent(searchController);

recipeView.addhandEvent(showRecipe);
