const CustomError = require("../extensions/custom-error");

const chainMaker = {
  _array: [],
  getLength() {
   return this.count;
  },
  addLink(value) {
    this._array.push('( '+value+' )');
    return this;
  },
  removeLink(position) {
    if (position > this._array.length || position <= 0) { 
      this._array = [];
      throw new Error;
    }
    this._array.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this._array = this._array.reverse();
    return this;
  },
  finishChain() {
    const result = this._array.join('~~');
    this._array = [];
    return result
  }
};

module.exports = chainMaker;
