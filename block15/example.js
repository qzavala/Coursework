const car = {
    make: "toyota",
    model: "camry",
    start(){
        console.log("VROOM");
    },
    brake(){
        console.log("screeech");
    }
}

//console.table(car);

//console.log(car.make)
console.log(car.make)
car.start();

const user = {
    name: "bob", 
    password: "123",
    login(){
        console.log("logging in...");
    }
}
user.id = "awesonegu1234y";
delete user["name"];

user.id = "reallyawesoneguy1234";


console.log(user.name + "is")
user.login();