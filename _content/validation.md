---
title: Validation
date: 2021-07-16T23:43:33.484Z
description: Implement function, which checks if the password meets certain conditions.
---

Implement function, which checks if the password meets certain conditions:

- Length between 3 and 10 chars
- 1 special character - !, @ or #
- At least 1 digit

Example:

```js
validatePassword('test') // => false
validatePassword('test11!') // => true
```

Solution #1:

```js
const MIN_PASS_LENGTH = 3;
const MAX_PASS_LENGTH = 10;
const SPECIAL_CHARS = ['!', '@', '#'];

const hasDigit = (string) => {
   return /\d/.test(string);
}

const hasSpecialChar = (string) => {
  for(const char of SPECIAL_CHARS){
    if (string.includes(char)) return true;
  }    
  return false;
}

function validatePassword(password) {
  let hasRequiredLength = !(password.length < MIN_PASS_LENGTH) && !(password > MAX_PASS_LENGTH);

  if (typeof password !== 'string') {
    throw new ("Exception was thrown 'cause parameter should only be passed as a string")
  }
  return hasRequiredLength && hasDigit(password) && hasSpecialChar(password);
}
```
