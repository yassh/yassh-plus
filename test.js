const plus = require('./');
const test = require('tape');

test('plus', (t) => {
  t.plan(3);

  t.equal(plus(1, 1), 2);
  t.equal(plus(1, 2), 3);
  t.equal(plus(7, 9), 16);
});
