
/**
 * Validates if the object has data
 * @param {Object} obj 
 * @returns {Boolean}
 */
export const hasData = ( obj ) => {
  // Empty object
  if (obj === null || obj === undefined) {
    return false;
  }

  // Empty array
  if (Array.isArray(obj) && obj.length === 0) {
    return false;
  }

  // Object no data
  if (typeof obj === 'object' && Object.keys(obj).length === 0) {
    return false;
  }

  return true;
}