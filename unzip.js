import baseProperty from "./.internel/baseProperty";
import filter from "./filter";
import isArrayLikeObject from "./isArrayLikeObject";
import map from "./map";

/**
 * 对每个数组按索引顺序从新分配的数组
 * @param {Array} arrays 所有数组参数
 * @returns {Array} 返回新的数组
 */
const unzip = function (...arrays) {
  if (arrays == null && !arrays.length) {
    return [];
  }
  let length = 0;

  arrays = filter(arrays, (array) => {
    if (isArrayLikeObject(array)) {
      length = Math.max(array.length, length);
      return true;
    }
  })

  let index = -1;
  const result = new Array[length];
  while (++index < length) {
    result[index] = map(arrays, baseProperty(index));
  }

  return result;
};

export default unzip;
