/**
 * @see http://tools.ietf.org/html/rfc1035
 * @author zhongchiyu@gmail.com
 */

var label = '[a-zA-Z](?:[0-9a-zA-Z\\-]*[0-9a-zA-Z])?'

module.exports = label + '(?:\\.' + label + ')*';
