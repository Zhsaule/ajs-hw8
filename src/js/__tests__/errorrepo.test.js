import ErrorRepository from "../errorrepo";

describe('ErrorRepository', () => {
  let errorRepository;
  
  beforeEach(() => {
    errorRepository = new ErrorRepository();
    errorRepository.addError(1, 'Ошибка 1');
    errorRepository.addError(2, 'Ошибка 2');
  });
  
  test('должен возвращать текст ошибки по коду', () => {
    expect(errorRepository.translate(1)).toBe('Ошибка 1');
  });
  
  test('должен возвращать "Unknown error" при отсутствии кода', () => {
    expect(errorRepository.translate(3)).toBe('Unknown error');
  });
});