---
title: Palindrome
date: 2021-07-13T07:58:33.484Z
description: Given a string, return true if the string is a palindrome or false if it is not.
---

Given a string, return true if the string is a palindrome or false if it is not.
Palindromes are strings that form the same word if it is reversed.

Example:

```js
palindrome('kajak') // => true
palindrome('abc') // => false
```

Solution #1:

```js
function palindrome(str) {
  return str.split("").every((l, i) => l === str[str.length - i - 1]);
}
```
