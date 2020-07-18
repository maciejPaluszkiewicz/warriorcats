
const cat = ['Fluffy', 'Mephisto', 'Rumjack', 'Greebo', 'Crookshanks', 'Shadowfax', 'Garfield', 'Felix', 'Maurice', 'Sylvester', 'Azrael', 'Salem', 'Macavity'];
const skill = ['Skinny', 'Black', 'White', 'Purr', 'Fluffy', 'Sharp', 'Grumpy', 'Rattle', 'Ultimate', 'Fuzzy', 'Sneaky']
const weapon = ['stripe', 'paws', 'fang', 'claw', 'tail', 'purr', 'smell', 'cuddles', 'bite']

const shuffle = (array) => array[Math.floor(Math.random() * array.length)];

export const createRandomName = () => `${shuffle(cat)} ${shuffle(skill)}${shuffle(weapon)}`;

const skillName = ['Smell', 'Purr', 'Meow', 'Leap', 'Bite', 'Scratch', 'Snore', 'Sleep', 'Furball']
const skillDescription = ['Doom', 'Destruction', 'Vegance', 'Destiny', 'Freedom', 'Glory', 'Purrification', 'Tail', 'Stripes']

export const createRandomSkill = () => `${shuffle(skillName)} of ${shuffle(skillDescription)}`;