let n=9;
let x;
let y;
let prime=function (){

    for(var x = 2; x < n; x++){
      if(n % x === 0){
        y=1;
        return "notprime";
        break;
      }
    }if(y === 0){
    return "prime";  
    }
  }
  //console.log(prime(37));

console.log(prime(n));
