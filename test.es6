import assert from 'assert';
import find from './';

let odd = (x) => x & 1;

it('fj-find', () => {
  assert.deepEqual(find(odd, [1,2,3]),1);
  let findOdd = find(odd);
  assert.deepEqual(findOdd([1,2,3]),1);
});
