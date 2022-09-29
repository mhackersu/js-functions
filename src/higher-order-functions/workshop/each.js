// Call iterator(value, key, collection) for each element of collection.
// Accepts both arrays and objects.
//
// Note: each() does not have a return value, but rather simply runs the
// iterator function over each item in the input collection.
each = function(collection, iterator) {
  // Write your code here
  if(Array.isArray(collection)){
    for(var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else {
    for(var key in collection) {
      iterator(collection[key], key, collection);
    }
  }
};