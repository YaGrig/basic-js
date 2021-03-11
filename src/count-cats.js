const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  for(i = 0, count = 0; i<matrix.length;i++){
    for (m = 0; m<matrix[i].length; m++ ){
      if (matrix[i][m] === '^^'){
        count=count + 1;
      }
    }
  }
 return(count)
}