#!/usr/bin/env node

const execFile = require('child_process').execFile;
const flow = require('flow-bin');
const program = require('commander');
const app = require('./dist/index').default;
const package = require('./package.json');

console.log(app);

program
  .version(package.version)
  .option('-d, --debug', 'Print debug output')
  .option('-f, --file <file>', 'File to generate a type for')
  .option('-p, --printAst', 'Print the AST created in Flow')
  .parse(process.argv);

console.log(program.file);

execFile(flow, ['ast', program.file], (err, stdout) => {
  console.log('Creating files.');
  app(JSON.parse(stdout), program);
  console.log('Done creating files.');
});
