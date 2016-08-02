import fs from 'fs';
import sample from './sample.ast';
import getClassData from './getClassData';
import buildClass from './buildClass';

export default function(ast, program) {
  if (program.debug) {
    console.log('index: ast paramter', ast);
  }

  const classData = getClassData(ast);

  classData.forEach(({ className, classProps }) => {
    const actionClass = buildClass(className, classProps);

    fs.writeFile(`./models/${className}.js`, actionClass, (err) => {
      if (err) {
        throw err;
      }
      console.log('It\'s saved!');
    });
  });
}
