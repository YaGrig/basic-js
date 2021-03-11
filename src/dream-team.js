const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ){
  if (!Array.isArray(members)){
  return false
}
realnames = [];
for (i = 0; i<members.length; i++){
  if (typeof members[i] === 'string'){
    realnames.push(members[i].toUpperCase());
  }
}
c = realnames.map(function(x){
 for (i = 0; i<x.length; i++){
 if (x[i] !== '_' && x[i]!== ' '){
   return x[i]
 }
}
});
return(c.sort().join('').toUpperCase());
}