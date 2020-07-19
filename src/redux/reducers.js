import {
    FETCH_WARRIORS_PENDING, FETCH_WARRIORS_SUCCESS, FETCH_WARRIORS_ERROR,
    HIRE_WARRIOR, DISMISS_WARRIOR, RETIRE_WARRIOR, CREATE_WARRIOR
} from './actions';
import { initialState } from './store';
import { setCache } from '../cacheManager';

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
        case HIRE_WARRIOR:
            const increasedWarriors = state.warriors.map(warrior => {
                if (warrior.id === action.warrior.id) {
                    warrior.hired = true;
                }
                return { ...warrior };
            });
            setCache(increasedWarriors);
            return {
                ...state,
                warriors: increasedWarriors
            }
        case DISMISS_WARRIOR:
            const decreasedWarriors = state.warriors.map(warrior => {
                if (warrior.id === action.warrior.id) {
                    warrior.hired = false;
                }
                return { ...warrior };
            });
            setCache(decreasedWarriors);
            return {
                ...state,
                warriors: decreasedWarriors
            }
        case RETIRE_WARRIOR:
            const remainingWarriors = state.warriors.filter(warrior => warrior.id !== action.warrior.id);
            setCache(remainingWarriors);
            return {
                ...state,
                warriors: remainingWarriors
            }
        case CREATE_WARRIOR:
            const expandedWarriors = [...state.warriors, action.warrior];
            setCache(expandedWarriors);
            return {
                ...state,
                warriors: expandedWarriors
            }
        default:
            return state;
    }
}
