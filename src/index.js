import fs from 'fs';
import sample from './sample.ast';
import getClassData from './getClassData';
import buildClass from './buildClass';

const { className, classProps } = getClassData(sample)[0];
const actionClass = buildClass(className, classProps);

fs.writeFile(`./models/${className}.js`, actionClass, (err) => {
  if (err) {
    throw err;
  }
  console.log('It\'s saved!');
});
