
const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];


myInstruments.push("tuba");
myInstruments.push("bassoon");
myInstruments.splice(2, 1);
myInstruments.unshift("saxophone");
console.log(myInstruments)

const first = myInstruments.shift();
console.log(first);

function getFirstInstrument(instruments) {
    return instruments[0];
  }
  function getLastInstrument(instruments) {
    return instruments.pop[0];
  }