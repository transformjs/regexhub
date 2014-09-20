// @see https://github.com/sindresorhus/ip-regex
var hub = require('../');

describe('ipv4', function() {
    var regex = hub.ipv4.exact();

    var valid = [
        '0.0.0.0',
        '127.0.0.1',
        '100.100.100.100',
        '192.168.0.1',
        '18.101.25.153',
        '123.23.34.2',
        '172.26.168.134',
        '212.58.241.131',
        '128.0.0.0',
        '23.71.254.72',
        '223.255.255.255',
        '192.0.2.235',
        '99.198.122.146',
        '46.51.197.88',
        '173.194.34.134'
    ];

    var invalid = [
        '.100.100.100.100',
        '100..100.100.100.',
        '100.100.100.100.',
        '999.999.999.999',
        '256.256.256.256',
        '256.100.100.100.100'
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
