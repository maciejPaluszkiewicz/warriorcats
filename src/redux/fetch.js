import { fetchWarriorsPending, fetchWarriorsSuccess, fetchWarriorsError } from './actions';

const URL = 'https://run.mocky.io/v3/79dd242a-ebca-4998-bd55-e1d8a180b3ba';

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