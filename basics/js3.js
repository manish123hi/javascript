const ma = new String("manish") /// it would be better for uu if u put new in front of stirng
console.log(ma);
numberof_repeat = ma.repeat(3);
console.log(numberof_repeat);

function repatation(string,number){
   if (number>0){
    nor = string.repeat(number);
    return nor;
   }
}

console.log(repatation("manish",3));