import AstToFlowTypesMap from './AstToFlowTypesMap';

export default (value) => {
  if (value.type === 'NullableTypeAnnotation') {
    return `?${AstToFlowTypesMap[value.typeAnnotation.id.name]}`;
  }

  return AstToFlowTypesMap[value.type];
};
