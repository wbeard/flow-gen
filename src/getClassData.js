import getClassName from './getClassName';
import getClassProps from './getClassProps';

export default (ast) => (
  ast.body.reduce((agg, branch) => {
    if (branch.type === 'TypeAlias' || branch.type === 'InterfaceDeclaration') {
      let className = getClassName(branch);
      let classProps = getClassProps(branch);
      const classData = { className, classProps };

      agg.push(classData);
    }

    return agg;
  }, [])
);
