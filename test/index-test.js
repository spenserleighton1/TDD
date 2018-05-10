import { assert } from 'chai';
let Index = require('../lib/index.js');

  describe('insertion sort', function() {
    it('should sort an array of numbers', function() {
      let actual = [1,3,2]
      let expected = [1,2,3]
      insertion(actual)
      assert.deepEqual(actual, expected);
    });
  });