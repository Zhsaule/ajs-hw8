import Team from "../team";
import Character from "../character";

describe('Team', () => {
  let team; 
  let character1; 
  let character2; 
  let character3; 
  let characters;

  beforeEach(() => {
    team = new Team();
    character1 = new Character ('Character 1');
    character2 = new Character ('Character 2');
    character3 = new Character ('Character 3');
    characters = [character1, character2, character3];
  });

  test('должен добавлять персонажа в команду', () => {
    team.add(character1);
    expect(team.toArray()).toEqual([character1]);
  });

  test('не должен допускать дублирование персонажей', () => {
    team.add(character1);
    expect(() => team.add(character1)).toThrow('Персонаж уже есть в команде');
  });

  test('должен добавлять произвольное количество персонажей', () => {
    team.addAll(...characters);
    expect(team.toArray()).toEqual([character1, character2, character3]);
  });

  test('должен конвертировать Set в массив', () => {
    team.addAll(... characters);
    expect(team.members.size).toBe(3);
  });
});