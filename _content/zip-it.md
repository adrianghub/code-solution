---
title: ZipIt
date: 2021-07-16T17:58:33.484Z
description: Implement function which interlace two passed parameters.
---

Implement function which interlace two passed parameters - using following digits from parameters, connect them into one string.

Example:

```js
zipIt(111, 222) // => '121212'
zipIt(123, 456) // => '142536'
zipIt(12, 5555) // => '152555'
```

Solution #1:

```js
function zipIt(first, second) {
    if (typeof first !== 'number' || typeof second !== 'number') {
        throw new Error ("Hey man! Should only provide numbers...")
    }

    const firstInputAsString = first.toString();
    const secondInputAsString = second.toString();
    const result = []

    for (let i = 0; i < Math.max(firstInputAsString.length, secondInputAsString.length); i++) {
        result.push(firstInputAsString[i], secondInputAsString[i]);
    }
    
  return result.join('');
}
```
