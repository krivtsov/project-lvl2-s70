import genDiff from '../src/lib/genDiffLogic';

const beforeJson = './__tests__/__fixtures__/before.json';
const afterJson = './__tests__/__fixtures__/after.json';

const beforeYml = './__tests__/__fixtures__/before.yml';
const afterYml = './__tests__/__fixtures__/after.yml';

const beforeIni = './__tests__/__fixtures__/before.ini';
const afterIni = './__tests__/__fixtures__/after.ini';

const equal = `{
  host: hexlet.io
+ timeout: 20
- timeout: 50
- proxy: 123.234.53.22
+ verbose: true
}`;

// describe('console', () => {
//   it('logs to the console', () => {
//     console.log(genDiff(beforeYml, afterYml));
//   });
// });

test('test JSON', () => {
  expect(genDiff(beforeJson, afterJson)).toBe(equal);
});

test('test YML', () => {
  expect(genDiff(beforeYml, afterYml)).toBe(equal);
});

test('test INI', () => {
  expect(genDiff(beforeIni, afterIni)).toBe(equal);
});
