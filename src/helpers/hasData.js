
/**
 * Validates if the object has data
 * @param {Object} obj 
 * @returns {Boolean}
 */
export const hasData = ( obj ) => {
  // Empty object
  if (!obj) {
    return false;
  }

  // Object no data
  if (Object.keys(obj).length === 0) {
    return false;
  }

  return true;
}