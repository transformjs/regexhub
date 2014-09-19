var hub = require('../');

describe('email', function() {
    var regex = new RegExp('^' + hub.email + '$');
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

    it('should recognize valid email addresses', function() {
        valid.forEach(function(email) {
        try {

            regex.test(email).should.be.true;
        }catch(e) {
            console.log(email);
        }
        });
    });

    it('should recognize invalid email address', function() {
        invalid.forEach(function(email) {
            regex.test(email).should.be.false;
        });
    });
});
