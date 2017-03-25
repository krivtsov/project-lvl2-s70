import _ from 'lodash';
import getParser from '../parsers';

const combineKeys = (before, after) => {
  const beforeKeys = _.keys(before);
  const afterKeys = _.keys(after);
  return _.union(beforeKeys, afterKeys);
};

const toString = array => `{\n${_.join(array, '\n')}\n}`;

const generatesDifferences = (before, after) => {
  const arrayKeys = combineKeys(before, after);
  const differencesBefore = _.reduce(arrayKeys, (result, key) => {
    if (_.has(before, key) && _.has(after, key)) {
      if (_.isEqual(after[key], before[key])) {
        return result.concat(`  ${key}: ${before[key]}`);
      }
      return result.concat(`+ ${key}: ${after[key]}`, `- ${key}: ${before[key]}`);
    } else if (_.has(before, key)) {
      return result.concat(`- ${key}: ${before[key]}`);
    }
    return result.concat(`+ ${key}: ${after[key]}`);
  }, []);
  return toString(differencesBefore);
};

export default (before, after) => {
  const beforeContent = getParser(before);
  const afterContent = getParser(after);
  const result = generatesDifferences(beforeContent, afterContent);
  return result;
};
