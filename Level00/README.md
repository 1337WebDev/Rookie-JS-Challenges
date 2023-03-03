# Challenge 00 - Unexpected parsing

## Instructions

### Here is a piece of code:

```js
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return 
  {
    status: msg
  }
}
```

### Expected Behaviour

Function should return a dictionary/Object/Hash with `"status"` as a key, whose value can : `"busy"` or `"available"` depending on the truth value of the argument is_busy.

But as you will see after running ```npm run test00``` this code has several bugs, please fix them.
