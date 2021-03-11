const CustomError = require("../extensions/custom-error");
const { count } = require("./simple-chain");
module.exports = class DepthCalculator{
  calculateDepth(value) {
 if (Array.isArray(value)) { return 1 + Math.max(0, ...value.map(x => this.calculateDepth(x)))}
 else {return 0}
 }
}