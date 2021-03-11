const CustomError = require("../extensions/custom-error");

module.exports =  function repeater( str, options) {
  arr = Object.entries(options);
  let rt = options.repeatTimes;
  let sep = options.separator;
  let addsep = options.additionSeparator;
  let add = (String(options.addition));
  let sum = ''
  if(sep === undefined){
    sep = '+'
  }
  if(addsep === undefined){
    addsep = '|';
  }
  let art= options.additionRepeatTimes;
  if (art == undefined && rt == undefined){
    return String(str)+ add;
  }
  if (art == undefined){
    sum =  String(str)+ add + addsep;
    sum = sum.substring(0, sum.length-addsep.length);
  } else{
  sum= (String(str)+((add+addsep).repeat(art)));}
  art == 0 || typeof(art) !== 'number'? sum = sum : sum = sum.substring(0, sum.length-addsep.length);
  if( add === 'undefined'){
    sum = String(str);
  }
  if(rt === undefined || typeof(rt) !== 'number') { return sum = sum }
  else {sum = (sum + sep).repeat(rt);
    return((sum.substring(0, sum.length - sep.length)))
  }
}