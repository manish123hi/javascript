// // arrow function awala
// //this keyword: this sp[oke abot yhe current context
// const user={
//     username: "man",
//     price :999,

//     welcomemessage: function() {
//         console.log(`${this.username} ,welcome to website`);
//     //console.log(this); if u give this conmsole then this acr in such away hoina taile jun jun value rakhe ko xa sabai value yesle dinxnxa
//     }
// }
// user.welcomemessage()
// //taile suru ma data haru insert gare rw bana aani kaam garxa hgai vai

// user.username="kar"
// user.welcomemessage()
// //yesari accroding to presewnt valuebaata yesko lagi , just if takes value fropm only current data
// //console.log(this); // yesle empty dinxa


// function chai() {
//     let user = "Manish"
//     console.log(this.user);
// }
// chai()  n


const man =() => {
    let user = "Manish"
    console.log(this);
}
man()  
// yesma sadahi nai null value aai rakxa

//yeslai vanxa implict return
// const add2 = (num1,num2) => {
//     return num1+ num2
// }

// console.log(3,4);
//yeslai vanxa explict return  where we must not not use return keyworf
const add2 = (num1,num2) => 
    (
     num1+ num2
)

console.log(add2(3,4));
