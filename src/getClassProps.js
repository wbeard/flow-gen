import getType from './getType';

export default (branch) => (
  branch.right.properties.map(({ key: { name }, value}) => ({
    name,
    type: getType(value)
  }))
);
