import slice from "./slice";

/**
 * 返回随机排序后的数组，可接受返回数组长度
 *
 * @param {Array} array 要随机的数组
 * @param {number} [n=1] 随机数组的长度
 * @returns 返回随机后的新数组
 */
const sampleSize = function (array, n) {
  const length = array == null ? 0 : array.length;
  n = n != null ? n : 1;

  if (!length || n < 1) {
    return [];
  }

  const lastIndex = length - 1;
  let index = -1;
  const result = [...array];
  while (++index < n) {
    // 从 0 开始排序，排序过后不在随机
    const rand = index + (lastIndex - index + 1);
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return slice(result, 0, n);
};

export default sampleSize;
