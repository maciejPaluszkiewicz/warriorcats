export const FETCH_WARRIORS_PENDING = 'FETCH_WARRIORS_PENDING';
export const FETCH_WARRIORS_SUCCESS = 'FETCH_WARRIORS_SUCCESS';
export const FETCH_WARRIORS_ERROR = 'FETCH_WARRIORS_ERROR';
export const HIRE_WARRIOR = 'HIRE_WARRIOR';
export const DISMISS_WARRIOR = 'DISMISS_WARRIOR';
export const RETIRE_WARRIOR = 'RETIRE_WARRIOR';
export const CREATE_WARRIOR = 'CREATE_WARRIOR';

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

export function hireWarrior(warrior) {
    return {
        type: HIRE_WARRIOR,
        warrior: warrior
    }
}

export function dismissWarrior(warrior) {
    return {
        type: DISMISS_WARRIOR,
        warrior: warrior
    }
}

export function retireWarrior(warrior) {
    return {
        type: RETIRE_WARRIOR,
        warrior: warrior
    }
}
export function createWarrior(warrior) {
    return {
        type: CREATE_WARRIOR,
        warrior: warrior
    }
}
