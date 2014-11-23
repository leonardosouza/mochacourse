var hex2rgb = require('../lib/hex2rgb');
var assert = require('assert');

describe('hex2rgb', function () {
    it('should throw an error if result is not a hex code', function() {
        
        assert.throws(function () {
            hex2rgb("blue")
        }, /Invalid hexadecimal string/);
    });

    it('should return a correctly converted rgb value', function() {
        var rgb = hex2rgb("#fff");

        assert.deepEqual(rgb, [255, 255, 255]);
    })
});