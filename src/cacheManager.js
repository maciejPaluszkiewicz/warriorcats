export const setCache = (warriors, initial = false) => {
    localStorage.setItem('catwarriors', JSON.stringify(warriors));
    if (initial) localStorage.setItem('catwarriorsDate', (new Date()).toUTCString());
}

export const getCache = () => {
    const createdOn = new Date(localStorage.getItem('catwarriorsDate'));
    const current = new Date();
    if (daysBetween(createdOn, current) > 3) {
        localStorage.removeItem('catwarriors');
        localStorage.removeItem('catwarriorsDate');
        return null;
    }
    return JSON.parse(localStorage.getItem('catwarriors'));
}

//From Stackoverflow by Ed Poor
function daysBetween(first, second) {

    // Copy date parts of the timestamps, discarding the time parts.
    var one = new Date(first.getFullYear(), first.getMonth(), first.getDate());
    var two = new Date(second.getFullYear(), second.getMonth(), second.getDate());

    // Do the math.
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var millisBetween = two.getTime() - one.getTime();
    var days = millisBetween / millisecondsPerDay;

    // Round down.
    return Math.floor(days);
}