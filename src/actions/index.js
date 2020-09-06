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

export const getPokeList = () => dispatch => {
    dispatch({ type: LOADING_POKEMON })
    axios.get('')
        .then(res => {
            console.log(res)
            dispatch({ LOAD_POKEMON_SUCCESS, type: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOAD_POKEMON_FAILURE, payload: err })
        })
}

