let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toISOString());

// console.log(typeof mydate);


let mD= new Date("2004-12-12")
// let timestamp = Date.now()
// console.log(timestamp);
// console.log(mD.getTime()) 

// let diff = mD-timestamp;
// console.log(diff);
mydate.toLocaleString('Default',
{
    weekday:"long",
    timeZone:"+5:45"
}

)
