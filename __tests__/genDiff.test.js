import logic from '../src/lib/genDiffLogic';

const beforeJson = './__tests__/__fixtures__/before.json';
const afterJson = './__tests__/__fixtures__/after.json';

const beforeYml = './__tests__/__fixtures__/before.yml';
const afterYml = './__tests__/__fixtures__/after.yml';

const equal = `{
  host: hexlet.io
+ timeout: 20
- timeout: 50
- proxy: 123.234.53.22
+ verbose: true
}`;

describe('console', () => {
  it('logs to the console', () => {
    console.log(logic(beforeYml, afterYml));
  });
});

test('test JSON', () => {
  expect(logic(beforeJson, afterJson)).toBe(equal);
});

test('test YML', () => {
  expect(logic(beforeYml, afterYml)).toBe(equal);
});
