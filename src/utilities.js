
const cat = ['Fluffy', 'Mephisto', 'Rumjack', 'Greebo', 'Crookshanks', 'Shadowfax', 'Garfield', 'Felix', 'Maurice', 'Sylvester', 'Azrael', 'Salem', 'Macavity'];
const skill = ['Skinny', 'Black', 'White', 'Purr', 'Fluffy', 'Sharp', 'Grumpy', 'Rattle', 'Ultimate', 'Fuzzy', 'Sneaky']
const weapon = ['stripe', 'paws', 'fang', 'claw', 'tail', 'purr', 'smell', 'cuddles', 'bite']

const shuffle = (array) => Math.floor(Math.random() * array.length);

export const createRandomName = () => `${shuffle(cat)} ${shuffle(skill)}${shuffle(weapon)}`;