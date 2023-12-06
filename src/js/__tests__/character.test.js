import Character from "../character";

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character('Character 1');
  });

  test('Проверка создания Character с правильными параметрами', () => {
    const character1 = {
    name: 'Character 1'
    };    
    expect(character).toEqual(character1);
  });
});
  
  