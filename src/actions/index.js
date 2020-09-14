import axios from 'axios';

// Action types
export const ADD_POKEMON = 'ADD_POKEMON';
export const REMOVE_POKEMON = 'REMOVE_POKEMON';
export const LOADING_POKEMON = 'LOADING_POKEMON';
export const LOAD_POKEMON_FAILURE = 'LOAD_POKEMON_FAILURE';
export const LOAD_POKEMON_SUCCESS = 'LOAD_POKEMON_SUCCESS';

// Action creators
export const addPokemon = pokemon => {
    return { // Action
        type: ADD_POKEMON,
        payload: pokemon
    }
}

export const removePokemon = pokemon => {
    return {
        type: REMOVE_POKEMON,
        payload: pokemon
    }
}

// Async request
export const getPokeList = () => dispatch => {
    dispatch({ type: LOADING_POKEMON })
    axios.get('https://pokeapi.co/api/v2/pokemon-form/?limit=151')
        .then(res => {
            res.data.results.forEach(pokemon => {
                axios.get(pokemon.url)
                    .then(res => {
                        dispatch({ type: LOAD_POKEMON_SUCCESS, payload: {name: pokemon.name, img: res.data.sprites.front_default} })
                    })
                    .catch(err => {
                        dispatch({ type: LOAD_POKEMON_FAILURE, payload: err })
                    })
            })
        })
        .catch(err => {
            dispatch({ type: LOAD_POKEMON_FAILURE, payload: err })
        })
}

