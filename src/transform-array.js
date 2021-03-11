const CustomError = require("../extensions/custom-error");

module.exports =  function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error();
  }
  let b = [];
  let keywords = ['--discard-next','--discard-prev','--double-next','--double-prev'];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == '--discard-next' && !keywords.includes(arr[i+1]) && (arr.indexOf(arr[i+1]) !== -1 || isNaN(arr[i+1]))){ 
      i++
    }
    else if (arr[i] == '--discard-prev' && !keywords.includes(arr[i-1]) && arr[i-2] !== '--discard-next' && (arr.indexOf(arr[i+1]) !== -1 || isNaN(arr[i+1]))){
      b.pop()
    }
    else if ( i != arr.length-1 && arr[i] == '--double-next' && !keywords.includes(arr[i+1]) && (arr.indexOf(arr[i+1]) !== -1 || isNaN(arr[i+1]))){
      b.push(arr[i+1])
    }
    else if (i !== 0 && arr[i] == '--double-prev'&& !keywords.includes(arr[i-1]) && arr[i-2] !== '--discard-next' && (arr.indexOf(arr[i-1]) !== -1 || isNaN(arr[i-1]))){
      b.push(arr[i-1])
    }
    else { 
      b.push(arr[i])
    }
  }
  for (let i = 0; i < arr.length; i++){
    if(keywords.includes(b[i])){
      b.splice(i,1)
      i--
    }
  }
  return b
}
  