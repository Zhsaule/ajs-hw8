import Settings from "../settings";

describe('Settings', () => {
  let settings;
  
  beforeEach(() => {
    settings = new Settings();
  });
  
  test.each([
    ['theme', 'light'],
    ['music', 'rock'],
    ['difficulty','easy'],
  ])('должен возвращать настройки, объединенные с пользовательскими', (key, value) => {
    settings.setSetting('theme', 'light');
    settings.setSetting('music', 'rock');
    expect(settings.settings.get(key)).toBe(value);
  });

  test.each([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty','easy'],
  ])('должен возвращать настройки по умолчанию, если пользовательских настроек нет', (key, value) => {
    expect(settings.settings.get(key)).toBe(value);
  });
});
  