import baseIndexOf from "./baseIndexOf";

const arrayIncludes = function (values, target) {
  const length = values != null ? values.length : 0;
  return !!length && baseIndexOf(values, target, 0) > -1;
};

export default arrayIncludes;
