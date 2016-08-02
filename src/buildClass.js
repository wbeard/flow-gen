// @flow

const capitalize = (str: string): string => `${str[0].toUpperCase()}${str.slice(1)}`;
const buildClassProps = (classProps: ClassProp[]) => classProps.reduce((str, classProp) => {
  return str.concat(`
  get ${classProp.name}(): ${classProp.type} {
    return this.get('${classProp.name}');
  }

  set${capitalize(classProp.name)}(value: ${classProp.type}): this {
    return this.set('${classProp.name}', value);
  }
`);
}, '');
const buildInitialState = (classProps: Array<Object>): string => classProps.reduce((str, classProp) => {
  return str.concat(`result = result.set('${classProp.name}', '${classProp.type}');\n`);
}, '');


export default (className: string, classProps: Array<Object>): string => (
`// @flow
import * as Immutable from 'immutable';
import ImmutableModel from '../src/classes/ImmutableModel';

export default class ${className} extends ImmutableModel {
  initialize() {
    let result = Immutable.Map();
    ${buildInitialState(classProps)}
    return result;
  }

  ${buildClassProps(classProps)}
}`);
