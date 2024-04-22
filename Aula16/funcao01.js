function parImpar(n){
    if(n % 2 == 0){
        return 'Par'
    } else {
        return 'Impar'
    }
};

let resPar = parImpar(242);
console.log(res); // Par

var resImpar = parImpar(241);
console.log(res); // Impar