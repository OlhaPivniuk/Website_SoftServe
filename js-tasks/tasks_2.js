//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
  return string.split(' ')
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    return dna.replace(/T/g,'U');
    }

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    if (toReturn === 'value'){
        return Math.min(...arr);
    }
    return arr.indexOf(Math.min(...arr))
  }
//Поглиблені задачки (робити за бажанням):
//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

//https://www.codewars.com/kata/beginner-lost-without-a-map

//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
