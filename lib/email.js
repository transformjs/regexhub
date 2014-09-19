/**
 * @see http://en.wikipedia.org/wiki/Email_address.
 * also @see https://gist.github.com/CatTail/4191834
 * @author zhongchiyu@gmail.com
 */

// local part
var valid = "[0-9a-zA-Z\\!#\\$%&'\\*\\+\\-\\/\\=\\?\\^_`\\{\\|\\}~]+?";
var local = '(?:(?:' + valid + '\\.)*' + valid + ')';

// domain part
var host = '(:?[0-9a-zA-Z\\-]+\\.)*[0-9a-zA-Z\\-]+';
var ip = '\\[.+?\\]' // TODO: handle IPv4 and IPv6
var domain = '(?:(?:' + host + ')|(?:' + ip + '))';

module.exports = local + '@' + domain;
