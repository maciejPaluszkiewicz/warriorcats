export const getWarriors = state => state.warriors;
export const getWarriorsPending = state => state.pending;
export const getWarriorsError = state => state.error;
export const getWarriorByID = (state, id) => state.warriors.filter(warrior => warrior.id === id)[0];
export const getNextFreeID = state => (Math.max(...state.warriors.map(warrior => parseInt(warrior.id))) + 1).toString();