import Settings from '../js/settings';

test('set them', () => {
  const s = new Settings();
  s.settings = { key: 'theme', value: 'light' };
  const r = new Map();
  r.set('theme', 'light');
  r.set('music', 'trance');
  r.set('difficulty', 'easy');
  expect(s.settings).toEqual(r);
});

test('set music', () => {
  const s = new Settings();
  s.settings = { key: 'music', value: 'pop' };
  const r = new Map();
  r.set('theme', 'dark');
  r.set('music', 'pop');
  r.set('difficulty', 'easy');
  expect(s.settings).toEqual(r);
});

test('set difficulty', () => {
  const s = new Settings();
  s.settings = { key: 'difficulty', value: 'difficulty' };
  const r = new Map();
  r.set('theme', 'dark');
  r.set('music', 'trance');
  r.set('difficulty', 'easy');
  expect(s.settings).toEqual(r);
});

test('set undefined', () => {
  const s = new Settings();
  expect(() => {
    s.settings = { key: 'difficulty_1', value: 'difficulty' };
  }).toThrow(new Error('setting not found'));
});
