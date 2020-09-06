// Action types
export const ADD_POKEMON = 'ADD_POKEMON';
export const REMOVE_POKEMON = 'REMOVE_POKEMON';
export const LOAD_POKEMON = 'LOAD_POKEMON';

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


