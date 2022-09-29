// Return all elements of an array that pass a truth test.
// Requirement: Implement your .each() function
filter = function(collection, test) {
  // Write your code here
  var results = [];
  each(collection, function(value){
    if(test(value)) results.push(value);
  });
  return results;
};