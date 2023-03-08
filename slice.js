/**
 * 根据指定的开始或结束的索引，返回新的数组，
 * 可以传入负数代表从尾部算位置算起
 *
 * @param {Array} array 原始数组
 * @param {number} [start] 起始位置
 * @param {number} [end] 结束位置
 * @returns {Array} 返回新的数组
 */
const slice = function (array, start, end) {
  let length = array != null ? array.length : 0;

  if (length === 0) {
    return [];
  }
  // 先判断有没传参
  start = start == null ? 0 : start;
  end = end === undefined ? length : end;

  // 负值处理
  if (start < 0) {
    start = -start < length ? 0 : start + length;
  }

  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  // 处理最终有效值
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  let index = -1;
  const result = [];
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
};

export default slice;
