import fs from 'fs';
import _ from 'lodash';

const readContentsFile = file => JSON.parse(fs.readFileSync(file, 'utf8'));

const toString = array => `{\n${_.join(array, '\n')}\n}`;

const generatesDifferences = (before, after) => {
  const differencesBefore = _.transform(before, (result, value, key) => {
    if (value === after[key]) {
      result.push(`  ${key}: ${value}`);
      return result;
    }
    if (_.has(after, key)) {
      result.push(`+ ${key}: ${after[key]}`);
    }
    result.push(`- ${key}: ${value}`);
    return result;
  }, []);

  const differencesAfter = _.transform(after, (result, value, key) => {
    if (!_.has(before, key)) {
      result.push(`+ ${key}: ${value}`);
    }
    return result;
  }, differencesBefore);
  return toString(differencesAfter);
};

export default (before, after) => {
  const beforeContent = readContentsFile(before);
  const afterContent = readContentsFile(after);
  const result = generatesDifferences(beforeContent, afterContent);
  return result;
};
