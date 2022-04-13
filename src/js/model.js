import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJson } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: {},
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJson(API_URL + id);
    const obj = data.data.recipe;

    state.recipe = {
      id: obj.id,
      image: obj.image_url,
      pablisher: obj.publisher,
      ingredients: obj.ingredients,
      title: obj.title,
      servings: obj.servings,
      url: obj.source_url,
      time: obj.cooking_time,
    };
  } catch (err) {
    throw err;
  }
};

export const searchResults = async function (searchKey) {
  try {
    const data = await getJson(API_URL + `?search=${searchKey}`);

    const getArr = data.data.recipes;
    state.search.results = getArr.map(val => {
      return {
        id: val.id,
        image: val.image_url,
        publisher: val.publisher,
        title: val.title,
      };
    });
    console.log(state.search.results);
  } catch (er) {
    throw er;
  }
};
