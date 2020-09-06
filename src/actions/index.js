import { ADD_POKEMON, REMOVE_POKEMON, LOAD_POKEMON } from '../actions';

let initialState = {
    genericPokeList: [],
    userPokeList: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POKEMON:
            return {
                ...state,
                userPokeList: [...state.userPokeList, action.payload]
            }
        case REMOVE_POKEMON:
            return {
                ...state,
                userPokeList: state.userPokeList.filter(item => item.id !== action.payload.id)
            }
        case LOAD_POKEMON:
            return {
                ...state,
                genericPokeList: action.payload
            }
            default:
                return state;
        }
}