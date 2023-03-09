import Hash from "./Hash";

/**
 * 判断使用哪种数据结构缓存
 *
 * @param {*} key 键
 * @returns {boolean} 如果是 `true` 使用 Hash，否则使用 Map
 */
const isKeyable = function (key) {
  const type = typeof key;
  // Hash 数据结构不允许修改 `__proto__` 属性
  return type === "string" ||
    type === "number" ||
    type === "symbol" ||
    type === "boolean"
    ? key !== "__proto__"
    : key !== null;
};

const getMapData = function ({ __data__ }, key) {
  return isKeyable(key)
    ? __data__[typeof key === "string" ? "string" : "hash"]
    : __data__["map"];
};

class MapCache {
  /**
   * 根据键值类型的不同决定存取的数据载体不同,
   * 数据操作只在数据载体的方法操作，`MapCache` 单纯执行增删查改的操作
   *
   * @constructs
   * @param {Array} [entries] 元素格式为 `[key, value]` 这种
   */
  constructor(entries) {
    this.clear();

    for (const entry of entries) {
      this.set(entry[0], entry[1]);
    }
  }

  clear() {
    this.size = 0;
    this.__data__ = {
      string: new Hash(),
      map: new Map(),
      hash: new Hash(),
    };
  }

  get(key) {
    const data = getMapData(this, key);
    return data.get(key);
  }

  set(key, value) {
    const data = getMapData(this, key);
    const size = data.size;

    data.set(key, value);
    this.size += data.size === size ? 0 : 1;
    return this;
  }

  has(key) {
    // 包含值的代表存在该键值
    // `value` 为 "__lodash_has_undefined__" 也说明存在该键值
    return getMapData(this, key).has(key);
  }

  delete(key) {
    return getMapData(this, key)["delete"];
  }
}

export default MapCache;
