// function probability() {
//   var willRandomNumbers = ['normal', 'normal', 'normal', 'normal', 'shiny'];
//   var probabilities = Math.floor(Math.random() * willRandomNumbers.length);
//   return willRandomNumbers[probabilities];
// }
// console.log(probability());

const getRandom = () => {
  var num = Math.random();
  let probability = '';
  num < 0.9 ? (probability = 'normal') : (probability = 'shiny');
  return probability;
};

console.log(getRandom());
