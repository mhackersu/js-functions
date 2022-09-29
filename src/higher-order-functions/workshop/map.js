// Return the results of applying an iterator to each element.
// Requirement: Implement your .each() function
map = function(collection, iterator) {
  // map() is a useful primitive iteration function that works a lot
  // like each(), but in addition to running the operation on all
  // the members, it also maintains an array of results.

  // Write your code here
  var results = [];
  each(collection, function(value){
    results.push(iterator(value));
  });
  return results;
};