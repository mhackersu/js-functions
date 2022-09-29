function iReturnFunction() {
  return function () {
    return 42;
  };
}
const myFunc = iReturnFunction();
myFunc(); // => 42
