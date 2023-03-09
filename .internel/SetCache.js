class SetCache {
  /**
   * 创建一个储存数组的对象，并且只存唯一值，也就是过滤掉重复的值
   *
   * @constructor
   * @param {Array} [values] 需要储存的数组
   */
  constructor(values) {
    const length = values == null ? 0 : values.length;
    let index = -1;

    this.__data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }

  add(value) {
    this.__data__.set(value, '__lodash_has_undefined__');
    return this;
  }

  has(value) {
    return this.__data__.has(value);
  }
}
SetCache.prototype.push = SetCache.prototype.add;
export default SetCache;
