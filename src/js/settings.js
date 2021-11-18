export default class Settings {
  constructor() {
    this.defaultSettings = new Map();
    this.defaultSettings.set('theme', 'dark');
    this.defaultSettings.set('music', 'trance');
    this.defaultSettings.set('difficulty', 'easy');

    this.hiddenSettings = this.defaultSettings;

    this.theme = new Set(['dark', 'light', 'gray']);
    this.music = new Set(['trance', 'pop', 'rock', 'chillout', 'off']);
    this.difficulty = new Set(['easy', 'normal', 'hard', 'nightmare']);

    this.settings = { key: 'theme', value: 'dark' };
    this.settings = { key: 'music', value: 'trance' };
    this.settings = { key: 'difficulty', value: 'easy' };
  }

  set settings(s) {
    switch (s.key) {
      case 'theme':
        this.hiddenSettings.set(s.key, this.theme.has(s.value)
          ? s.value : this.defaultSettings.get(s.key));
        break;
      case 'music':
        this.hiddenSettings.set(s.key, this.music.has(s.value)
          ? s.value : this.defaultSettings.get(s.key));
        break;
      case 'difficulty':
        this.hiddenSettings.set(s.key, this.difficulty.has(s.value)
          ? s.value : this.defaultSettings.get(s.key));
        break;
      default:
        throw new Error('setting not found');
    }
  }

  get settings() {
    return this.hiddenSettings;
  }
}
