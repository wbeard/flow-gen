import fs from 'fs';
import sample from './sample.ast';
import getClassData from './getClassData';
import buildClass from './buildClass';
import path from 'path';

function directoryExists(path) {
  try {
    return fs.statSync(path).isDirectory();
  }
  catch (err) {
    return false;
  }
}

export default function(ast, program) {
  const outDirBasePath = program.outDir || 'models';
  const classData = getClassData(ast);
  const outDirExists = directoryExists(outDirBasePath);

  if (!outDirExists) {
    fs.mkdirSync(outDirBasePath);
  }

  classData.forEach(({ className, classProps }) => {
    const actionClass = buildClass(className, classProps);
    const savePath = path.join(outDirBasePath, `${className}.js`);

    fs.writeFile(savePath, actionClass, (err) => {
      if (err) {
        throw err;
      }

      console.log(`Saved ${className} to ${savePath}`);
    });
  });
}
