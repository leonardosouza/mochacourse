var getPalette = require('../lib/getPalette');
var assert = require('assert');
var fs = require('fs');

var configFile = process.cwd() + "/config.json";

function writeConfig(config, callback) {
    console.log("===>", config);
    fs.writeFile(configFile, JSON.stringify(config), callback);
}


describe('getPalette', function () {
    var config = {};

    before(function(done) {
        fs.readFile(configFile, function(err, contents) {
            config = JSON.parse(contents.toString());
            done();
        });
    });

    afterEach(function(done) {
        writeConfig(config, done);
    });



    it('should throw an error if result is not array', function(done) {
        writeConfig({ palette: "string" }, function(err) {
            assert.throws(getPalette, /is not an array/);
            done();
        });
    });

    it('should return an array with 3 items', function () {
        var palette = getPalette();
        assert(Array.isArray(palette), 'did not return an array');
        assert.equal(palette.length, 3, 'did not return 3 items');
    });
});