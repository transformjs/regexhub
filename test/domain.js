var hub = require('../');

describe('domain', function() {
    var regex = hub.domain.exact();

    var valid = [
        'example.com',
        'example2.com',
        'example-3.com',
        'example---3.com',
        'example33-3.com',
        'example.com2',
        'example.com-2',
    ];

    var invalid = [
        '5example.com',
        'example-.com',
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
