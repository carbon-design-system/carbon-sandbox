const generateVariable = (name, value) => {
  return `$${name}: ${value};`;
};

const generateVariablesString = variablesObj => {
  return Object.keys(variablesObj)
    .map(name => generateVariable(name, variablesObj[name]))
    .join('\n');
};

module.exports = {
  generateVariable,
  generateVariablesString,
};
