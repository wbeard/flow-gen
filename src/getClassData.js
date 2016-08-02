import getClassName from './getClassName';
import getClassProps from './getClassProps';
import getFlowType from './getFlowType';

const getType = branch => branch.type;

export default function getClassData(ast) {
  return ast.body.reduce((agg, branch) => {
    const type = getType(branch);

    if (type === 'TypeAlias' || type === 'InterfaceDeclaration') {
      let className = getClassName(branch);
      let classProps = getClassProps(branch.right.properties);
      const classData = { className, classProps };

      agg.push(classData);
    }

    return agg;
  }, [])
}
