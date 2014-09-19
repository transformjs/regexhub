var hub = require('../');

describe('email', function() {
    var regex = new RegExp('^' + hub.email + '$');
    var valids = [
        'niceandsimple@example.com',
        'very.common@example.com',
        'a.little.lengthy.but.fine@dept.example.com',
        'disposable.style.email.with+symbol@example.com',
        'user@[IPv6:2001:db8:1ff::a0b:dbd0]',
        '0@a',
        'postbox@com',
        '!#$%&\'*+-/=?^_`{}|~@example.org'
    ];

    var invalids = [
        'Abc.example.com',
        'Abc.@example.com',
        'Abc..123@example.com',
        'A@b@c@example.com',
        'a"b(c)d,e:f;g<h>i[j\\k]l@example.com',
        'this is"not\\allowed@example.com',
        'this\\ still\\"not\\\\allowed@example.com'
    ];

    it('should recognize valid email addresses', function() {
        valids.forEach(function(valid) {
            regex.test(valid).should.be.true;
        });
    });

    it('should recognize invalid email address', function() {
        invalids.forEach(function(invalid) {
            regex.test(invalid).should.be.false;
        });
    });
});
