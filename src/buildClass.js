const buildClassProps = (classProps) => classProps.reduce((string, classProp) => {
  return string.concat(`
    get ${classProp.name}(): ${classProp.type} { return this.data.get(${classProp.name}) }
    set${classProp.name}(value: ${classProp.type}): { return this.data.set(${classProp.name}, value) }
  `);
}, '');

export default (className, classProps) => {
  return `
  import * as Immutable from 'immutable';

  class ${className} {
    constructor() {
      this.data = Immutable.Map();
    }

    ${buildClassProps(classProps)}
  }
  `;
};
