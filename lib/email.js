/**
 * @see http://en.wikipedia.org/wiki/Email_address#Syntax
 * also @see https://gist.github.com/CatTail/4191834
 * @author zhongchiyu@gmail.com
 */

var ipv4 = require('./ipv4');
var ipv6 = require('./ipv6');

// local part
var valid = "[0-9a-zA-Z\\!#\\$%&'\\*\\+\\-\\/\\=\\?\\^_`\\{\\|\\}~]+?";
var local = '(?:(?:' + valid + '\\.)*' + valid + ')';

// domain part
var host = '(:?[0-9a-zA-Z\\-]+\\.)*[0-9a-zA-Z\\-]+';
var ip = '\\[(?:(?:' + ipv4 + ')|(?:' + ipv6 + '))\\]';
var domain = '(?:(?:' + host + ')|(?:' + ip + '))';

module.exports = local + '@' + domain;
