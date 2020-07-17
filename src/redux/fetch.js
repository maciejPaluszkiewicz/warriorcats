import { fetchWarriorsPending, fetchWarriorsSuccess, fetchWarriorsError } from './actions';

const URL = 'https://run.mocky.io/v3/f27f02e9-14c7-4d4d-a08a-9d37d008ba42';

function fetchWarriors() {
    return dispatch => {
        dispatch(fetchWarriorsPending());
        fetch(URL)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchWarriorsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchWarriorsError(error));
            })
    }
}

export default fetchWarriors;