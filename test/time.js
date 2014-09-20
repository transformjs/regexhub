var hub = require('../');

describe('time', function() {
    var regex = hub.time.exact();

    var valid = [
        '12:01:45',
        '01:45',
        '1:45'
    ];

    var invalid = [
        '12-01-45',
        '33:01:45',
        '12:45:1'
    ];

    it('valid', function() {
        valid.forEach(function(item) {
            regex.test(item).should.be.true;
        })
    });

    it('invalid', function() {
        invalid.forEach(function(item) {
            regex.test(item).should.be.false;
        })
    });
});
