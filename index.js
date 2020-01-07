function filterOddLengthWords(words) {
  // your code here
  /* START SOLUTION */
  let result = words.filter(item => item.length % 2 !== 0)
  return result

  /* END SOLUTION */
}
var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']