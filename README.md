# is-indexed

Predicate that returns true for *indexed* values.

# Install

```bash
npm install is-indexed
```

```bash
bower install is-indexed
```

# Usage

```javascript
var isIndexed = require('is-indexed');

console.log(isIndexed('')); // true
console.log(isIndexed([])); // true
console.log(isIndexed({})); // false
console.log(isIndexed(null)); // false
console.log(isIndexed(undefined)); // false
console.log(isIndexed(1)); // false
console.log((function() { return isIndexed(arguments); })()); // true
```

# License

MIT
