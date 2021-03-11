const CustomError = require("../extensions/custom-error");


class VigenereCipheringMachine {
  constructor(cipheringMod) { 
    this.mod = cipheringMod;
    this.spaceIndex = [];
    this.keyF = [];
    this.messageF = [];
    this.messageArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.alhpNumber = []; 
    this.keyNumber = [];
    this.finishNumber = [];
    this.finishMessage = [];
    this.notLetterIndex = [];
    this.WhatEx = [];
  }

  encrypt(message, key){
        this.spaceIndex = [];
        this.keyF = [];
        this.messageF = [];
        this.alhpNumber = []; 
        this.keyNumber = [];
        this.finishMessage = [];
        this.finishNumber = [];
        this.notLetterIndex = [];
        this.WhatEx = [];
     if(this.mod == true || this.mod == null){
       for (let i = 0; i<message.length; i++){
         this.messageF[i] = message[i].toUpperCase();
       }
       for (let i = 0; i<this.messageF.length; i++){
         this.alhpNumber.push(this.messageArr.indexOf(this.messageF[i]))
        }
        for (let i =0; i<this.messageF.length; i++){
          if (this.alhpNumber[i] === -1){
            this.alhpNumber.splice(this.alhpNumber.indexOf(this.alhpNumber[i]), 1)
             for (i = 0; i<10; i++){
            if(this.alhpNumber.includes(-1)){
              for (let i =0; i<this.messageF.length; i++){
          if (this.alhpNumber[i] === -1){
            this.alhpNumber.splice(this.alhpNumber.indexOf(this.alhpNumber[i]), 1)}}
            }
            }
          }
        }
        for (let i = 0; i<key.length; i++){
         this.keyF[i] = key[i].toUpperCase();
       }
       for (let i = 0; i<this.keyF.length; i++){
         this.keyNumber.push(this.messageArr.indexOf(this.keyF[i]))
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          if(this.keyNumber.length<this.alhpNumber.length){
            this.keyNumber.push(this.keyNumber[i])
          }
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          if(this.keyNumber.length>this.alhpNumber.length){
            this.keyNumber.splice(this.keyNumber.length-1)
          }
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          this.finishNumber.push(this.keyNumber[i] + this.alhpNumber[i])
          if(this.finishNumber[i]>25){
            this.finishNumber[i] = this.finishNumber[i] - 26;
          }
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          this.finishMessage.push(this.messageArr[this.finishNumber[i]])
        }
        this.finishFinish = this.finishMessage.slice();
        for (let i = 0; i<this.messageF.length; i++){
            if(!this.messageArr.includes(this.messageF[i])){
            this.WhatEx.push(this.messageF[i])
          }
        }
        for (let i = 0; i<this.WhatEx.length; i++){
          this.notLetterIndex.push(this.messageF.indexOf(this.WhatEx[i]))
          this.messageF.splice(this.messageF.indexOf((this.WhatEx[i])),1,'A')
        }
        this.finishFinish = this.finishMessage.slice();
        for (let i = 0; i<this.notLetterIndex.length; i++){
        this.finishMessage.splice(this.notLetterIndex[i],0,message[this.notLetterIndex[i]])
        }
        return this.finishMessage.join('');
      } else  { 
        this.spaceIndex = [];
        this.keyF = [];
        this.messageF = [];
        this.alhpNumber = []; 
        this.keyNumber = [];
        this.finishMessage = [];
        this.finishNumber = [];
        this.notLetterIndex = [];
        this.WhatEx = [];
        for (let i = 0; i<message.length; i++){
         this.messageF[i] = message[i].toUpperCase();
       }
       for (let i = 0; i<this.messageF.length; i++){
         this.alhpNumber.push(this.messageArr.indexOf(this.messageF[i]))
        }
        for (let i =0; i<this.messageF.length; i++){
          if (this.alhpNumber[i] === -1){
            this.alhpNumber.splice(this.alhpNumber.indexOf(this.alhpNumber[i]), 1)
             for (i = 0; i<10; i++){
            if(this.alhpNumber.includes(-1)){
              for (let i =0; i<this.messageF.length; i++){
          if (this.alhpNumber[i] === -1){
            this.alhpNumber.splice(this.alhpNumber.indexOf(this.alhpNumber[i]), 1)}}
            }
            }
          }
        }
        
        for (let i = 0; i<key.length; i++){
         this.keyF[i] = key[i].toUpperCase();
       }
       for (let i = 0; i<this.keyF.length; i++){
         this.keyNumber.push(this.messageArr.indexOf(this.keyF[i]))
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          if(this.keyNumber.length<this.alhpNumber.length){
            this.keyNumber.push(this.keyNumber[i])
          }
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          if(this.keyNumber.length>this.alhpNumber.length){
            this.keyNumber.splice(this.keyNumber.length-1)
          }
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          this.finishNumber.push(this.keyNumber[i] + this.alhpNumber[i])
          if(this.finishNumber[i]>25){
            this.finishNumber[i] = this.finishNumber[i] - 26;
          }
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          this.finishMessage.push(this.messageArr[this.finishNumber[i]])
        }
        this.finishFinish = this.finishMessage.slice();
       for (let i = 0; i<this.messageF.length; i++){
            if(!this.messageArr.includes(this.messageF[i])){
            this.WhatEx.push(this.messageF[i])
          }
        }
        for (let i = 0; i<this.WhatEx.length; i++){
          this.notLetterIndex.push(this.messageF.indexOf(this.WhatEx[i]))
          this.messageF.splice(this.messageF.indexOf((this.WhatEx[i])),1,'A')
        }
        this.finishFinish = this.finishMessage.slice();
        for (let i = 0; i<this.notLetterIndex.length; i++){
        this.finishMessage.splice(this.notLetterIndex[i],0,message[this.notLetterIndex[i]])
        }
        return this.finishMessage.reverse().join(''); 
      } 
    }
  decrypt(message, key) {
    this.spaceIndex = [];
        this.keyF = [];
        this.messageF = [];
        this.alhpNumber = []; 
        this.keyNumber = [];
        this.finishMessage = [];
        this.finishNumber = [];
        this.notLetterIndex = [];
        this.WhatEx = [];
     if(this.mod == true || this.mod == null){ 
    for (let i = 0; i<message.length; i++){
         this.messageF[i] = message[i].toUpperCase();
       }
       for (let i = 0; i<this.messageF.length; i++){
         this.alhpNumber.push(this.messageArr.indexOf(this.messageF[i]))
        }
        for (let i =0; i<this.messageF.length; i++){
          if (this.alhpNumber[i] === -1){
            this.alhpNumber.splice(this.alhpNumber.indexOf(this.alhpNumber[i]), 1)
             for (i = 0; i<10; i++){
            if(this.alhpNumber.includes(-1)){
              for (let i =0; i<this.messageF.length; i++){
          if (this.alhpNumber[i] === -1){
            this.alhpNumber.splice(this.alhpNumber.indexOf(this.alhpNumber[i]), 1)}}
            }
            }
          }
        }
        for (let i = 0; i<key.length; i++){
         this.keyF[i] = key[i].toUpperCase();
       }
       for (let i = 0; i<this.keyF.length; i++){
         this.keyNumber.push(this.messageArr.indexOf(this.keyF[i]))
        }
        
        for (let i = 0; i<this.keyNumber.length; i++){
          if(this.keyNumber.length<this.alhpNumber.length){
            this.keyNumber.push(this.keyNumber[i])
          }
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          if(this.keyNumber.length>this.alhpNumber.length){
            this.keyNumber.splice(this.keyNumber.length-1)
          }
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          this.finishNumber.push(this.alhpNumber[i] - this.keyNumber[i])
          if(this.finishNumber[i]<0){
            this.finishNumber[i] = 26- Math.abs(this.finishNumber[i]) ;
          }
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          this.finishMessage.push(this.messageArr[this.finishNumber[i]])
        }
        this.finishFinish = this.finishMessage.slice();
       for (let i = 0; i<this.messageF.length; i++){
            if(!this.messageArr.includes(this.messageF[i])){
            this.WhatEx.push(this.messageF[i])
          }
        }
        for (let i = 0; i<this.WhatEx.length; i++){
          this.notLetterIndex.push(this.messageF.indexOf(this.WhatEx[i]))
          this.messageF.splice(this.messageF.indexOf((this.WhatEx[i])),1,'A')
        }
        this.finishFinish = this.finishMessage.slice();
        for (let i = 0; i<this.notLetterIndex.length; i++){
        this.finishMessage.splice(this.notLetterIndex[i],0,message[this.notLetterIndex[i]])
        }
        return this.finishMessage.join(''); 
  } else { 
    this.spaceIndex = [];
        this.keyF = [];
        this.messageF = [];
        this.alhpNumber = []; 
        this.keyNumber = [];
        this.finishMessage = [];
        this.finishNumber = [];
        this.notLetterIndex = [];
        this.WhatEx = [];
    for (let i = 0; i<message.length; i++){
         this.messageF[i] = message[i].toUpperCase();
       }
       for (let i = 0; i<this.messageF.length; i++){
         this.alhpNumber.push(this.messageArr.indexOf(this.messageF[i]))
        }
        for (let i =0; i<this.messageF.length; i++){
          if (this.alhpNumber[i] === -1){
            this.alhpNumber.splice(this.alhpNumber.indexOf(this.alhpNumber[i]), 1)
            for (i = 0; i<10; i++){
            if(this.alhpNumber.includes(-1)){
              for (let i =0; i<this.messageF.length; i++){
          if (this.alhpNumber[i] === -1){
            this.alhpNumber.splice(this.alhpNumber.indexOf(this.alhpNumber[i]), 1)}}
            }
            }
          }
        }
        
        for (let i = 0; i<key.length; i++){
         this.keyF[i] = key[i].toUpperCase();
       }
       for (let i = 0; i<this.keyF.length; i++){
         this.keyNumber.push(this.messageArr.indexOf(this.keyF[i]))
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          if(this.keyNumber.length<this.alhpNumber.length){
            this.keyNumber.push(this.keyNumber[i])
          }
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          if(this.keyNumber.length>this.alhpNumber.length){
            this.keyNumber.splice(this.keyNumber.length-1)
          }
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          this.finishNumber.push(this.alhpNumber[i] - this.keyNumber[i])
          if(this.finishNumber[i]<0){
            this.finishNumber[i] = 26- Math.abs(this.finishNumber[i]) ;
          }
        }
        for (let i = 0; i<this.keyNumber.length; i++){
          this.finishMessage.push(this.messageArr[this.finishNumber[i]])
        }
        this.finishFinish = this.finishMessage.slice();
        for (let i = 0; i<this.messageF.length; i++){
            if(!this.messageArr.includes(this.messageF[i])){
            this.WhatEx.push(this.messageF[i])
          }
        }
        for (let i = 0; i<this.WhatEx.length; i++){
          this.notLetterIndex.push(this.messageF.indexOf(this.WhatEx[i]))
          this.messageF.splice(this.messageF.indexOf((this.WhatEx[i])),1,'A')
        }
        this.finishFinish = this.finishMessage.slice();
        for (let i = 0; i<this.notLetterIndex.length; i++){
        this.finishMessage.splice(this.notLetterIndex[i],0,message[this.notLetterIndex[i]])
        }
        return this.finishMessage.reverse().join(''); 
  } 
}
 
}
module.exports = VigenereCipheringMachine;
