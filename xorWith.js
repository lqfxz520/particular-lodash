import _ from "lodash";

const a = [[1, 2, 3]];
const b = [[1, 3]];

const result = _.xorWith(a, b, (values, computed) => {
  console.log(values, computed);
  return values === computed;
});

console.log("result", result);
