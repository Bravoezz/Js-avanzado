'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  var resto = 0
	let numA=num.toString().split("").reverse()
	for(let i = 0; i<numA.length; i++){
  
  	resto += numA[i] * (2**i)
}
	return resto;
}

function DecimalABinario(num) {
  // tu codigo aca
  /*
  21/2 = 10 (resto 1)
10/2 = 5 (resto 0)
5/2 = 2 (resto 1)
2/2 = 1 (resto 0)
1/2 = 0 (resto 1)*/
//ddd
  let array = [];
  while (num>0) {
    array.unshift(num%2);
    num = Math.trunc(num/2);

  }
  return array.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}