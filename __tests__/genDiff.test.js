import genDiff from '../src';

const beforeJson = './__tests__/__fixtures__/before.json';
const afterJson = './__tests__/__fixtures__/after.json';

const beforeYml = './__tests__/__fixtures__/before.yml';
const afterYml = './__tests__/__fixtures__/after.yml';

const beforeIni = './__tests__/__fixtures__/before.ini';
const afterIni = './__tests__/__fixtures__/after.ini';

const beforeJsonAttached = './__tests__/__fixtures__/attached/before.json';
const afterJsonAttached = './__tests__/__fixtures__/attached/after.json';

const equal = `{
  host: hexlet.io
+ timeout: 20
- timeout: 50
- proxy: 123.234.53.22
+ verbose: true
}`;

const equalAttached = `{
    common: {
        setting1: Value 1
      - setting2: 200
        setting3: true
      - setting6: {
            key: value
        }
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
    }
    group1: {
      + baz: bars
      - baz: bas
        foo: bar
    }
  - group2: {
        abc: 12345
    }
  + group3: {
        fee: 100500
    }
}`;

describe('console', () => {
  it('logs to the console', () => {
    console.log(genDiff(beforeJsonAttached, afterJsonAttached));
  });
});

test('test JSON', () => {
  expect(genDiff(beforeJson, afterJson)).toBe(equal);
});

test('test YML', () => {
  expect(genDiff(beforeYml, afterYml)).toBe(equal);
});

test('test INI', () => {
  expect(genDiff(beforeIni, afterIni)).toBe(equal);
});

test('test JSON Attached', () => {
  expect(genDiff(beforeJsonAttached, afterJsonAttached)).toBe(equalAttached);
});
