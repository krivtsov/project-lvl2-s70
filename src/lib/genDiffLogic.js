import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

const fileExtension = file => path.extname(file);

const parseJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));

const parseYml = file => yaml.safeLoad(fs.readFileSync(file, 'utf8'));

const parseIni = file => ini.parse(fs.readFileSync(file, 'utf8'));

const combineKeys = (before, after) => {
  const beforeKeys = _.keys(before);
  const afterKeys = _.keys(after);
  return _.union(beforeKeys, afterKeys);
};

const readContentsFile = (file) => {
  const expr = fileExtension(file);
  switch (expr) {
    case '.json':
      return parseJson(file);
    case '.yml':
    case '.yaml':
      return parseYml(file);
    case '.ini':
      return parseIni(file);
    default:
      return false;
  }
};

const toString = array => `{\n${_.join(array, '\n')}\n}`;

const generatesDifferences = (before, after) => {
  const arrayKeys = combineKeys(before, after);
  const differencesBefore = _.reduce(arrayKeys, (result, key) => {
    if (_.has(before, key) && _.has(after, key)) {
      if (_.isEqual(after[key], before[key])) {
        return _.concat(result, `  ${key}: ${before[key]}`);
      }
      return _.concat(result, `+ ${key}: ${after[key]}`, `- ${key}: ${before[key]}`);
    } else if (_.has(before, key)) {
      return _.concat(result, `- ${key}: ${before[key]}`);
    }
    return _.concat(result, `+ ${key}: ${after[key]}`);
  }, []);
  return toString(differencesBefore);
};

export default (before, after) => {
  const beforeContent = readContentsFile(before);
  const afterContent = readContentsFile(after);
  const result = generatesDifferences(beforeContent, afterContent);
  return result;
};
