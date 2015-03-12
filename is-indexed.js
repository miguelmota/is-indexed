(function(root) {

  function isIndexed(v) {
    return Array.isArray(v) || (typeof v === 'string' || v instanceof String) || (v && v.toString() === '[object Arguments]');
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isIndexed;
    }
    exports.isIndexed = isIndexed;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isIndexed;
    });
  } else {
    root.isIndexed = isIndexed;
  }

})(this);

