---
title: Revert it!
date: 2021-05-08T07:58:33.484Z
description: Reverse an order of string passed to function.
---

Revert an order of string passed to function.

Example:

```js
reverseMe('abc') // => 'cba'
```

Solution #1:

```js
function reverseMe (str) {
  return str.split("").reverse().join("");
}
```

Solution #2:

```js
function reverseMe (str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
```
