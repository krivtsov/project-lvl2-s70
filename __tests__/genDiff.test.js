import logic from '../src/lib/genDiffLogic';

const before = './sampleFiles/before.json';
const after = './sampleFiles/after.json';

const equal = `{
  host: hexlet.io
+ timeout: 20
- timeout: 50
- proxy: 123.234.53.22
+ verbose: true
}`;

describe('console', () => {
  it('logs to the console', () => {
    console.log(logic(before, after));
  });
});

test('first test', () => {
  expect(logic(before, after)).toBe(equal);
});
