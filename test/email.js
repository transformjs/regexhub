var hub = require('../');

describe('email', function() {
    var regex = hub.email.exact();

    var valid = [
        'niceandsimple@example.com',
        'very.common@example.com',
        'a.little.lengthy.but.fine@dept.example.com',
        'disposable.style.email.with+symbol@example.com',
        'user@[2001:db8:1ff::a0b:dbd0]',
        '0@a',
        'postbox@com',
        '!#$%&\'*+-/=?^_`{}|~@example.org'
    ];

    var invalid = [
        'Abc.example.com',
        'Abc.@example.com',
        'Abc..123@example.com',
        'A@b@c@example.com',
        'a"b(c)d,e:f;g<h>i[j\\k]l@example.com',
        'this is"not\\allowed@example.com',
        'this\\ still\\"not\\\\allowed@example.com'
    ];

    it('valid', function() {
        valid.forEach(function(email) {
            regex.test(email).should.be.true;
        });
    });

    it('invalid', function() {
        invalid.forEach(function(email) {
            regex.test(email).should.be.false;
        });
    });
});
