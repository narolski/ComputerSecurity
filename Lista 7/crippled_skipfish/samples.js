var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'dir': '_m0/0', 'linked': 2, 'len': 3942 },
    { 'url': 'http://127.0.0.1:8000/accounts/', 'dir': '_m0/1', 'linked': 5, 'len': 6000 },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'dir': '_m0/2', 'linked': 5, 'len': 1612 },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'dir': '_m0/3', 'linked': 5, 'len': 2546 },
    { 'url': 'http://127.0.0.1:8000/accounts/register/', 'dir': '_m0/4', 'linked': 5, 'len': 2521 },
    { 'url': 'http://127.0.0.1:8000/static/', 'dir': '_m0/5', 'linked': 2, 'len': 1651 } ]
  },
  { 'mime': 'image/jpeg', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/img/photo1.jpg/', 'dir': '_m1/0', 'linked': 2, 'len': 166184 },
    { 'url': 'http://127.0.0.1:8000/static/img/photo4.jpg/', 'dir': '_m1/1', 'linked': 2, 'len': 191871 },
    { 'url': 'http://127.0.0.1:8000/static/img/photo3.jpg', 'dir': '_m1/2', 'linked': 2, 'len': 216373 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/css/style.css', 'dir': '_m2/0', 'linked': 2, 'len': 10650 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'https://unpkg.com/purecss@1.0.0/build/pure-min.css', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'https://rawgit.com/ruyadorno/simple-slider/master/dist/simpleslider.min.js', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'https://unpkg.com/purecss@1.0.0/build/pure-min.css', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'http://127.0.0.1:8000/accounts/register/', 'extra': 'https://unpkg.com/purecss@1.0.0/build/pure-min.css', 'sid': '0', 'dir': '_i0/3' },
    { 'url': 'http://127.0.0.1:8000/transfers/home', 'extra': 'https://unpkg.com/purecss@1.0.0/build/pure-min.css', 'sid': '0', 'dir': '_i0/4' },
    { 'url': 'http://127.0.0.1:8000/transfers/home', 'extra': 'https://rawgit.com/ruyadorno/simple-slider/master/dist/simpleslider.min.js', 'sid': '0', 'dir': '_i0/5' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://127.0.0.1:8000/9%201%20-', 'extra': 'SQL injection', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/\x27\x22', 'extra': 'SQL injection', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/3' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/bogus%0DSkipfish-Inject:bogus', 'extra': 'Header injection', 'sid': '0', 'dir': '_i1/4' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'param OGNL', 'sid': '0', 'dir': '_i1/5' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i1/6' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i1/7' },
    { 'url': 'http://127.0.0.1:8000/accounts/register/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/8' },
    { 'url': 'http://127.0.0.1:8000/accounts/register/', 'extra': 'User agent behavior', 'sid': '0', 'dir': '_i1/9' },
    { 'url': 'http://127.0.0.1:8000/accounts/register/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i1/10' },
    { 'url': 'http://127.0.0.1:8000/accounts/register/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i1/11' },
    { 'url': 'http://127.0.0.1:8000/accounts/register/', 'extra': 'during initial file fetch', 'sid': '0', 'dir': '_i1/12' },
    { 'url': 'http://127.0.0.1:8000/accounts/register/', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i1/13' },
    { 'url': 'http://127.0.0.1:8000/accounts/register/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i1/14' },
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i1/15' },
    { 'url': 'http://127.0.0.1:8000/static/css/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i1/16' },
    { 'url': 'http://127.0.0.1:8000/static/css/style.css/sfi9876', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/17' },
    { 'url': 'http://127.0.0.1:8000/static/css/style.css/sfish\x3e\x27\x3e\x22\x3e\x3c%2Fsfish\x3e\x3csfish\x3e', 'extra': 'XML injection', 'sid': '0', 'dir': '_i1/18' },
    { 'url': 'http://127.0.0.1:8000/static/img/', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i1/19' },
    { 'url': 'http://127.0.0.1:8000/static/img/photo1.jpg/sfi9876.zip', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/20' },
    { 'url': 'http://127.0.0.1:8000/static/img/photo2.jpg/sfi9876.xsl', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/21' },
    { 'url': 'http://127.0.0.1:8000/static/img/photo2.jpg/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i1/22' },
    { 'url': 'http://127.0.0.1:8000/static/img/photo4.jpg/sfi9876.zip', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/23' },
    { 'url': 'http://127.0.0.1:8000/static/img/photo3.jpg/sfi9876', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/24' },
    { 'url': 'http://127.0.0.1:8000/transfers/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i1/25' },
    { 'url': 'http://127.0.0.1:8000/transfers/accounts/sfi9876', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/26' },
    { 'url': 'http://127.0.0.1:8000/transfers/accounts/?_test1=c:\x5cwindows\x5csystem32\x5ccmd.exe&_test2=/etc/passwd&_test3=|/bin/sh&_test4=(SELECT%20*%20FROM%20nonexistent)%20--&_test5=\x3e/no/such/file&_test6=\x3cscript\x3ealert(1)\x3c/script\x3e&_test7=javascript:alert(1)', 'extra': 'IPS check', 'sid': '0', 'dir': '_i1/27' },
    { 'url': 'http://127.0.0.1:8000/transfers/home/`true`', 'extra': 'Shell injection (diff)', 'sid': '0', 'dir': '_i1/28' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/css/style.css', 'extra': '', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/register/', 'extra': '', 'sid': '0', 'dir': '_i3/1' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i4/2' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/register/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://127.0.0.1:8000/static/img/photo1.jpg/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/3' },
    { 'url': 'http://127.0.0.1:8000/static/img/photo2.jpg/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/4' },
    { 'url': 'http://127.0.0.1:8000/static/img/photo4.jpg/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i5/5' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i6/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'WSGIServer/0.2 CPython/3.5.3', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': 'csrftoken', 'sid': '0', 'dir': '_i8/0' } ]
  }
];

