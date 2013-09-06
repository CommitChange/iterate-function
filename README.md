iterate-function
================

Repeatedly apply a function.

  ```javascript
  iterate(limit, inital_value, func)

	// or:

  iterate(limit, func)
  ```

func gets passed two arguments:

  ```javascript
  iterate(limit, inital_value, func(index, applied_value) { do_stuff(); })
  ```

'index' is the current index of the loop. 'applied_value' is the return value of that function for the previous iteration.

Simple example:

  ```javascript
	iterate(3, function(i) { console.log(i) })
	> 0
	> 1
	> 2
  ```

Using the applied value to get the powers of 2:

  ```javascript
  power = iterate(4, 1, function(i, applied) { return applied * 2 });
  > 16
  ```

see similar: http://hackage.haskell.org/packages/archive/base/latest/doc/html/Prelude.html#v:iterate
