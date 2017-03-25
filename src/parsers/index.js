import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

const fileExtension = file => path.extname(file);

const readFile = file => fs.readFileSync(file, 'utf8');

const parseJson = file => JSON.parse(readFile(file));

const parseYml = file => yaml.safeLoad(readFile(file));

const parseIni = file => ini.parse(readFile(file));

export default (file) => {
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
