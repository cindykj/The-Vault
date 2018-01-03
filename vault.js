'use strict';
module.exports = function() {
    let myVault = {};
    let setValue = function (key, value){
        myVault[key] = value;
        return myVault;
    }
      
    let getValue = function (key){
        if(key === undefined || !myVault[key]) {
            return null;
        } else {
            return myVault[key];
        }

    }
    return {
        setValue: setValue,
        getValue: getValue,
    }
  };