import { ADD_POKEMON, REMOVE_POKEMON, LOADING_POKEMON, LOAD_POKEMON_FAILURE, LOAD_POKEMON_SUCCESS } from '../actions';

let initialState = {
    genericPokeList: [],
    userPokeList: [],
    isFetching: false,
    error: '',
    next: '',
    previous: ''
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
        case LOADING_POKEMON:
            return {
                ...state,
                isFetching: true
            }
        case LOAD_POKEMON_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case LOAD_POKEMON_SUCCESS:
            return {
                ...state,
                isFetching: false,
                genericPokeList: action.payload.results,
                next: action.payload.next,
                previous: action.payload.previous
            }
            default:
                return state;
        }
}