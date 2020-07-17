
export const FETCH_WARRIORS_PENDING = 'FETCH_WARRIORS_PENDING';
export const FETCH_WARRIORS_SUCCESS = 'FETCH_WARRIORS_SUCCESS';
export const FETCH_WARRIORS_ERROR = 'FETCH_WARRIORS_ERROR';

export function fetchWarriorsPending() {
    return {
        type: FETCH_WARRIORS_PENDING
    }
}

export function fetchWarriorsSuccess(warriors) {
    return {
        type: FETCH_WARRIORS_SUCCESS,
        warriors: warriors
    }
}

export function fetchWarriorsError(error) {
    return {
        type: FETCH_WARRIORS_ERROR,
        error: error
    }
}