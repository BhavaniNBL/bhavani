function palindrome(x) {
var str = x.toLowerCase().replace(/\s/g, '');
var revstr = str.split('').reverse().join('');
if (str == revstr) {
	console.log('It is a palindrome');
}
else {console.log('It is not a palindrome');}
}

palindrome("madaM im adam");