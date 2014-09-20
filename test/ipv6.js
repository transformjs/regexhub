// @see https://github.com/sindresorhus/ip-regex
var hub = require('../');

describe('ipv6', function() {
    var regex = hub.ipv6.exact();

    var valid = [
        '1::',
        '1::8',
        '1::7:8',
        '1:2:3:4:5:6:7:8',
        '1:2:3:4:5:6::8',
        '1:2:3:4:5:6:7::',
        '1:2:3:4:5::7:8',
        '1:2:3:4:5::8',
        '1:2:3::8',
        '1::4:5:6:7:8',
        '1::6:7:8',
        '1::3:4:5:6:7:8',
        '1:2:3:4::6:7:8',
        '1:2::4:5:6:7:8',
        '::2:3:4:5:6:7:8',
        '1:2::8'
    ];

    var invalid = [
        '1:2:3:4:5:6:1.2.3.4',
        '::',
        '1:',
        ':1'
    ];

    it('valid', function() {
        valid.forEach(function(item) {
            regex.test(item).should.be.true;
        });
    });

    it('invalid', function() {
        invalid.forEach(function(item) {
            regex.test(item).should.be.false;
        });
    });
});
