import { FETCH_WARRIORS_PENDING, FETCH_WARRIORS_SUCCESS, FETCH_WARRIORS_ERROR } from './actions';

export const initialState = {
    pending: false,
    warriors: [],
    error: null
}

export default function RootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WARRIORS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_WARRIORS_SUCCESS:
            return {
                ...state,
                pending: false,
                warriors: action.warriors
            }
        case FETCH_WARRIORS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getWarriors = state => state.warriors;
export const getWarriorsPending = state => state.pending;
export const getWarriorsError = state => state.error;
