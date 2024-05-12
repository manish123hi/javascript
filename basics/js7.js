// jab hami if slse use garda , function use grda {} use garxau teo case ma yslai scope vanne gainca
// but not on the senario of objecjsct case senario
// jab var lai bhaira pati global ma declare garinxa but taba pani yesle valu lidaina\
var c=67
let a= 54
if (true){
    let a= 20
    const b =30
    var c= 40
}

console.log(a);
// console.log(b);
console.log(c);
// aaru ko case ma global ma define grre ko xa vane global value grna milca
// that's why we use other let,const instead of var
//bhitra ko scope ma bhyae ko kura bhaira aauna hudina


// sun vai kasto ho vane function ko vitra bata bhaura ko accss garna miilxa bata but parent le child kodata scess grana mildaina

function one() {
    const username ="manish"

    function two() {
        const fname ="karki"
        console.log(username)

    }
//console.log(fname);
     two()
}
one()
//nested function klo case hai raja ramari bujis jasto lagxa


function name1(trey) {
    return trey+1 ;
}
console.log(name1(5));

// but if taile const use gare rw function   kocreate garis vabne tailejune teo value huxa sadhai tala mra rakhu  parxda


const  man =function (trey) {
    return trey+1 ;
}
man(7)