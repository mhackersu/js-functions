function iUseFunction(func) {
  return func();
}
iUseFunction(function () {
  return 42;
}); // => 42
