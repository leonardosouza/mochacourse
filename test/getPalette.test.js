var getPalette = require('../lib/getPalette');
var assert = require('assert');

describe('getPalette', function () {
    it('should throw an error if result is not array', function() {
        function fetch() { 
            return 'not array';
        }

        // dependency injection
        assert.throws(function() {
            getPalette(fetch);
        }, /is not an array/);
    });

    it('should return an array with 3 items', function () {
        var palette = getPalette();
        assert(Array.isArray(palette), 'did not return an array');
        assert.equal(palette.length, 3, 'did not return 3 items');
    });
});