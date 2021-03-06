#!/usr/bin/env node

const execFile = require('child_process').execFile;
const flow = require('flow-bin');
const program = require('commander');
const app = require('./dist').default;
const package = require('./package.json');

program
  .version(package.version)
  .option('-f, --file <file>', 'File to generate a type for')
  .option('-o, --outDir <dir>', 'Directory to save generated classes to')
  .option('-p, --printAst', 'Print the AST created in Flow')
  .parse(process.argv);

execFile(flow, ['ast', program.file], (err, stdout) => {
  console.log('Creating files.');
  app(JSON.parse(stdout), program);
  console.log('Done creating files.');
});
