function Add(num1, num2){
   let sum = 0; 

   for(let i = 0; i < arguments.length; i++){
       sum += parseFloat(arguments[i]);

   }
   return sum;
}

function Multiply(){
    let product = 1;

    for(let i = 0; i < arguments.length; i++){
        product *= parseFloat(arguments[i]);
    }
    return product;
}
