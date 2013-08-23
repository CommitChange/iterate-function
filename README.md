iterate-function
================

  ```javascript
  iterate(limit, inital_value, func)
  ```

Repeatedly apply a function to a value, then to the result of that application, then to the result of that application, then to the result of that application, and so on up to the limit.

For example, the powers of 2:

  ```javascript
  power = iterate(4, 1, function(n) { return n * 2 });
  > 16
  ```

You can also access the index of the current iteration as the second parameter in the passed function.

see similar: http://hackage.haskell.org/packages/archive/base/latest/doc/html/Prelude.html#v:iterate
