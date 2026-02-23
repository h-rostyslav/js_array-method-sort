'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let o = 0; o < this.length - 1 - i; o++) {
        let shouldSwap;

        if (typeof compareFunction === 'function') {
          shouldSwap = compareFunction(this[o], this[o + 1]) > 0;
        } else {
          shouldSwap = String(this[o]) > String(this[o + 1]);
        }

        if (shouldSwap) {
          [this[o], this[o + 1]] = [this[o + 1], this[o]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
