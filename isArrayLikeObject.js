import isArrayLike from "./isArrayLike"
import isObjectLike from "./isObjectLike";

const isArrayLikeObject = function(array) {
  return isObjectLike(array) && isArrayLike(array);
}

export default isArrayLikeObject;
