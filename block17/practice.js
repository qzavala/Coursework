// let name = "cherry";//outside function would not work

// const banana = {
//     name: "plantain",
//     sayHiArrow:() => console.log("Hi I am a " + this.name),
//     sayHiFunction: function (){
//         console.log("Hi I am a " + this.name)
//     }
// }
// const apple = {
//     name : "macintosh",
//     sayHiFunction: function (){
//         console.log("Hi I am a " + this.name)
// }
// }

// console.log("Arrow");
// fruit.sayHiArrow();
// console.log("Function");
// apple.sayHiFunction();

class Fruit{
 constructor(name){
    this.name = name;
 }
 sayHiFunction(){
    console.log("Hi I am a " + this.name)
}
}
const banana = new Fruit("banana");
const apple = new Fruit("macintosh");
const cherry = new Fruit("cherry");

banana.sayHiFunction();
apple.sayHiFunction();
cherry.sayHiFunction();