import getFlowType from './getFlowType';

export default (properties) => (
  properties.map(({ key: { name }, value}) => ({
    name,
    type: getFlowType(value)
  }))
);
