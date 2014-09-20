function value(v) {
    return function() {
        return v;
    };
}

module.exports = require('moder')(__dirname + '/lib', function(pattern) {
    var groupPattern = '(' + pattern + ')';
    var exactPattern = '^' + pattern + '$';

    var createGroup = function() {
        return new RegExp(groupPattern);
    };
    createGroup.toString = value(groupPattern);

    var createExact = function() {
        return new RegExp(exactPattern);
    };
    createExact.toString = value(exactPattern);

    var createGlobal = function() {
        return new RegExp(pattern, 'g');
    };

    var chain = {
        toString: value(pattern),
        group: createGroup,
        exact: createExact,
        global: createGroup
    };

    return chain;
});
