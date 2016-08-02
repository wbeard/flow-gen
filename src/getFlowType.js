import AstToFlowTypesMap from './AstToFlowTypesMap';

export default function getType(value) {
  const { id, type, typeAnnotation } = value;

  switch(type) {
    case 'GenericTypeAnnotation':
      return AstToFlowTypesMap[id.name];
    case 'NullableTypeAnnotation':
      return `?${getType(typeAnnotation)}`;
    default:
      return AstToFlowTypesMap[type];
  }
};
