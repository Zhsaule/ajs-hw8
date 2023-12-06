// TODO: write your code here
import Team from './team';
import Character from './character';
import ErrorRepository from './errorrepo';
import Settings from './settings';

console.log('worked');

//HW8 Set
const team = new Team();
const character1 = new Character ('Character 1');
const character2 = new Character ('Character 2');
const character3 = new Character ('Character 3');
const characters = [character1, character2, character3];

team.addAll(...characters);

console.log(team);
console.log(team.members.size);

const array = team.toArray();
console.log(array);

//HW8 Map
const errorRepo = new ErrorRepository();
errorRepo.addError(1, 'Ошибка 1');
errorRepo.addError(2, 'Ошибка 2');

console.log(errorRepo.translate(1));
console.log(errorRepo.translate(3));

//HW8 Map*
const settings = new Settings();
console.log(settings);
settings.setSetting('theme', 'light');
console.log(settings);

console.log(settings.settings.get('theme'));

