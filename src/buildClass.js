const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`;
const buildClassProps = (classProps) => classProps.reduce((str, classProp) => {
  return str.concat(`
  get ${classProp.name}(): ${classProp.type} {
    return this.get('${classProp.name}');
  }

  set${capitalize(classProp.name)}(value: ${classProp.type}): this {
    return this.set('${classProp.name}', value);
  }
`);
}, '');
const buildInitialState = (classProps) => classProps.reduce((str, classProp) => {
  return str.concat(`result = result.set('${classProp.name}', '${classProp.type}');`);
}, '');


export default (className, classProps) => (
`// @flow
import * as Immutable from 'immutable';

export default class ${className} {
  state: Immutable.Map<string, any>;

  constructor(state: ?Immutable.Map<string, any>) {
    this.state = state || this.initialize();
  }

  clone(value: Immutable.Map<string, any>): this {
    const constructor = this.constructor;
    return value === this.state ? this : new constructor(value);
  }

  initialize() {
    let result = Immutable.Map();
    ${buildInitialState(classProps)}
    return result;
  }

  get(property: string) {
    return this.state.get(property);
  }

  set(property: string, value: any): this {
    return this.clone(this.state.set(property, value));
  }

  ${buildClassProps(classProps)}
}`);
