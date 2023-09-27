if(0){
    console.log('truthy')
} else {
    console.log('falsy')
}

// guess falsy

const isOver26 = true;
const hasTicket = true;

// only one of these is going to run
if (!isOver26) {
  console.log("you can not rent");
} else if (hasTicket) {
  console.log("You can rent a car with extra fee");
} else {
  console.log("You can rent a car for cheap");
}

if (isOver26 && !hasTicket) {
  console.log("You can rent a car for cheap");
} else if (isOver26 && hasTicket) {
  console.log("You can rent a car with extra fee");
} else {
  console.log("you can not rent");
}

if (isOver26) {
  if (hasTicket) {
    console.log("You can rent a car with extra fee");
  } else {
    console.log("You can rent a car for cheap");
  }
} else {
  console.log("you can not rent");
}

//declaring a function..
//we do this once
const sayHello = (name) => {
    console.log(`Hello ${name}`)
    console.log('my  name is hal 2005')
}
sayHello('toby')


