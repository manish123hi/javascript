// const arr =[1,2,3,5]

// for (const val of arr) {
//     console.log(val);
    
// }


// //Maps


// const map= new Map()
// map.set("NP", "Nepal")
// map.set("ch", "china")
// map.set("china", "china")

// console.log(map);


// for (const [key, value] of map) {
//     console.log(key,":-", value);
// }

// // yo yesari object ma direct chai aalik garo hunca jasto ;laeo as i think
// const myobj={
//     c :'c',
//     cpp :'c++',
//     py :'pythonn'
// }

// for (const key in myobj) {
//     console.log( `${key}is the short form ${myobj}`);    
//     }
    // for array
    const p=["a","b","c"]
for (const key in p) {
    console.log(key); //whenever if ask for key then it will display number 
    }


    // here map is not iterable so that forin can't be used in map hai ta raja


    // for EACH LOOP
    const code=["py","cpp","c"]

    code.forEach( function (val){

        console.log(val);
    })


//     code.forEach(item)
// {
//         console.log(code);
// }

// function printme(item) {
//     console.log(item);
// }

// code.forEach(printme);

// // yestai khalko but arko pani hunxa

// code.forEach((item , index, arr) =>{

//     console.log(item , index, arr);
// })


// basically yesko concept vane ko larger array bata data lina kaam lagxa hai ajasto ki 
// hamilai data base bata data linu xa re ani te teo ta sabai kun forfm ma hunxa vand object ko fpormma hunxa tha'ss why "foreach is used"
const man  =[
    {country: "nepal",
        language :"nepali"
    },

    
    {country: "austrila",
        language :"english"
    }
,
    
    {country: "frane",
        language :"french"
    }
]
man.forEach((man)=>{
    console.log(man.country,":",man.language);
})

/// taile if man array ko nam jun xa taile yeti object ma define garinas vane but ...man gre rw consolem ma ouse gari vawe you will get whaasfata