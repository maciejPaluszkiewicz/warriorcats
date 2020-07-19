import { fetchWarriorsPending, fetchWarriorsSuccess, fetchWarriorsError } from './actions';
import { setCache, getCache } from '../cacheManager';

const URL = 'https://run.mocky.io/v3/79dd242a-ebca-4998-bd55-e1d8a180b3ba';

function fetchWarriors() {
    const cachedWarriors = getCache();

    if (cachedWarriors && cachedWarriors.length > 0) {
        return dispatch => dispatch(fetchWarriorsSuccess(cachedWarriors));
    }

    return dispatch => {
        dispatch(fetchWarriorsPending());
        fetch(URL)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchWarriorsSuccess(res));
                setCache(res, true);
                return res;
            })
            .catch(error => {
                dispatch(fetchWarriorsError(error));
            })
    }
}

export default fetchWarriors;