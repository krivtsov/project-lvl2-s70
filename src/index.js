const program = require('commander');

function list(val) {
  return val.split(',').map(Number);
}

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<first_config> <second_config>')
  .option('-f, --format [type]', 'Output format', list, ['ini', 'json', 'yaml'])
  .parse(process.argv);


console.log('  - %j', program.format);

export default () => console.log('123456');
