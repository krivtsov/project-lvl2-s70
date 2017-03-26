import yaml from 'js-yaml';
import ini from 'ini';

const parseJson = data => JSON.parse(data);

const parseYml = data => yaml.safeLoad(data);

const parseIni = data => ini.parse(data);

export default (expr) => {
  switch (expr) {
    case '.json':
      return data => parseJson(data);
    case '.yml':
    case '.yaml':
      return data => parseYml(data);
    case '.ini':
      return data => parseIni(data);
    default:
      return false;
  }
};
