var test = require('tape');
var isIndexed = require('../is-indexed');

test('isIndexed', function (t) {
  t.plan(10);

  t.true(isIndexed(''));
  t.true(isIndexed([]));
  t.false(isIndexed(0));
  t.false(isIndexed(null));
  t.false(isIndexed(undefined));
  t.false(isIndexed(1));
  t.false(isIndexed({}));
  t.false(isIndexed(function() {}));
  t.false(isIndexed(/foo/gi));
  t.false(isIndexed(NaN));
});
