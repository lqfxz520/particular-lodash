const HAS_UNDEFINED = '__lodash_has_undefined__';

class Hash {
  constructor(entries) {
    const length = entries == null ? 0 : entries.length;
    let index = -1;

    this.clear();
    while (++index < length) {
      const entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  clear() {
    this.__data__ = Object.create(null);
    this.size = 0;
  }

  set(key, value) {
    // `value` 为 undefined 时，需要设置 HAS_UNDEFINED
    // 否则检测不到是添加过该键值对，`size` 计算不准确
    const isHas = this.has(key);
    this.size += isHas ? 0 : 1;
    this.__data__[key] = value === undefined ? HAS_UNDEFINED : value;

    return this;
  }

  get(key) {
    const value = this.__data__[key];
    return value === HAS_UNDEFINED ? undefined : value;
  }

  has(key) {
    return this.__data__[key] !== undefined;
  }

  delete(value) {
    // result 返回 boolean 类型
    const result = this.has(value) && delete this.__data__[value];
    this.size -= result ? 1 : 0;
    return result;
  }
};
