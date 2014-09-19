var hub = require('../');

describe('date', function() {
    var regex = new RegExp('^' + hub.date + '$');

    var valid = [
        '2014-01-02',
        '28-04-2011',
        '02/28/2012',
        '02-28/2012', // FIXME
        '2011-15-45', // FIXME
    ];

    var invalid = [
        '20142-01-02',
        '2014-0102',
        '2804-2011',
        '023/28/2012'
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
