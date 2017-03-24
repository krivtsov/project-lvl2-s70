import logic from '../src/lib/genDiffLogic';

const beforeJson = './sampleFiles/before.json';
const afterJson = './sampleFiles/after.json';

const beforeYml = './sampleFiles/before.yml';
const afterYml = './sampleFiles/after.yml';

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
