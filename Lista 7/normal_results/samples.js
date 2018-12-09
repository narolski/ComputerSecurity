var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'dir': '_m0/0', 'linked': 2, 'len': 3228 },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'dir': '_m0/1', 'linked': 5, 'len': 1832 },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'dir': '_m0/2', 'linked': 5, 'len': 2029 },
    { 'url': 'http://127.0.0.1:8000/static/', 'dir': '_m0/3', 'linked': 2, 'len': 1651 },
    { 'url': 'http://127.0.0.1:8000/transfers/history', 'dir': '_m0/4', 'linked': 2, 'len': 159179 } ]
  },
  { 'mime': 'image/jpeg', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/img/profile.jpg/', 'dir': '_m1/0', 'linked': 2, 'len': 28102 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/', 'dir': '_m2/0', 'linked': 2, 'len': 16225 },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/', 'dir': '_m2/1', 'linked': 2, 'len': 1203 },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/responsive.css/', 'dir': '_m2/2', 'linked': 2, 'len': 17976 },
    { 'url': 'http://127.0.0.1:8000/static/css/style.css/', 'dir': '_m2/3', 'linked': 2, 'len': 10650 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'dir': '_m3/0', 'linked': 2, 'len': 59 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'https://unpkg.com/purecss@1.0.0/build/pure-min.css', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://127.0.0.1:8000/transfers/history', 'extra': 'http://dpaste.com/', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://127.0.0.1:8000/transfers/home', 'extra': 'https://unpkg.com/purecss@1.0.0/build/pure-min.css', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'http://127.0.0.1:8000/transfers/new', 'extra': 'http://dpaste.com/', 'sid': '0', 'dir': '_i0/3' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876.zip', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://127.0.0.1:8000/de.txt', 'extra': 'during path-based dictionary probes', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://127.0.0.1:8000/admin/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://127.0.0.1:8000/admin/`true`', 'extra': 'Shell injection (diff)', 'sid': '0', 'dir': '_i1/3' },
    { 'url': 'http://127.0.0.1:8000/admin/login/sfi9876/', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/4' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': 'User agent behavior', 'sid': '0', 'dir': '_i1/5' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i1/6' },
    { 'url': 'http://127.0.0.1:8000/admin/login/?next=%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e/WEB-INF%252fweb%252exml%2500.js', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i1/7' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i1/8' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': 'param behavior', 'sid': '0', 'dir': '_i1/9' },
    { 'url': 'http://127.0.0.1:8000/home/bogus%0ASkipfish-Inject:bogus', 'extra': 'Header injection', 'sid': '0', 'dir': '_i1/10' },
    { 'url': 'http://127.0.0.1:8000/home/parallels/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i1/11' },
    { 'url': 'http://127.0.0.1:8000/home/parallels/.local/lib/python3.5/.sf/', 'extra': 'dir traversal', 'sid': '0', 'dir': '_i1/12' },
    { 'url': 'http://127.0.0.1:8000/home/parallels/.local/lib/python3.5/site-packages/?_test1=ccddeeeimmnossstwwxy.:\x5c\x5c\x5c&_test2=acdepsstw//&_test3=bhins//&_test4=CEEFLMORSTeeinnnosttx-*&_test5=cefhilnosu///&_test6=acceiilpprrrssttt1)(&_test7=aaaceijlprrsttv1):(', 'extra': 'IPS check', 'sid': '0', 'dir': '_i1/13' },
    { 'url': 'http://127.0.0.1:8000/home/parallels/.local/lib/python3.5/site-packages/django/core/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i1/14' },
    { 'url': 'http://127.0.0.1:8000/home/parallels/.local/lib/python3.5/site-packages/django/core/handlers/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i1/15' },
    { 'url': 'http://127.0.0.1:8000/home/parallels/.local/lib/python3.5/site-packages/django/template/\x27`false`\x27', 'extra': 'Shell injection (diff)', 'sid': '0', 'dir': '_i1/16' },
    { 'url': 'http://127.0.0.1:8000/home/parallels/.local/lib/python3.5/site-packages/django/template/backends/bogus%0DSkipfish-Inject:bogus', 'extra': 'Header injection', 'sid': '0', 'dir': '_i1/17' },
    { 'url': 'http://127.0.0.1:8000/home/parallels/.local/lib/python3.5/site-packages/django/urls/`sleep%203`', 'extra': 'Shell injection (spec)', 'sid': '0', 'dir': '_i1/18' },
    { 'url': 'http://127.0.0.1:8000/home/parallels/.local/share/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i1/19' },
    { 'url': 'http://127.0.0.1:8000/home/parallels/.local/share/Trash/?_test1=ccddeeeimmnossstwwxy.:\x5c\x5c\x5c&_test2=acdepsstw//&_test3=bhins//&_test4=CEEFLMORSTeeinnnosttx-*&_test5=cefhilnosu///&_test6=acceiilpprrrssttt1)(&_test7=aaaceijlprrsttv1):(', 'extra': 'IPS check', 'sid': '0', 'dir': '_i1/20' },
    { 'url': 'http://127.0.0.1:8000/home/parallels/.local/share/Trash/files/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i1/21' },
    { 'url': 'http://127.0.0.1:8000/home/parallels/.local/share/Trash/files/Banking/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i1/22' },
    { 'url': 'http://127.0.0.1:8000/home/parallels/.local/share/Trash/files/Banking/onlinebank/%2B%2Fskipfish-bom', 'extra': 'prologue injection', 'sid': '0', 'dir': '_i1/23' },
    { 'url': 'http://127.0.0.1:8000/home/parallels/.local/share/Trash/files/Banking/onlinebank/templates/%2B%2Fskipfish-bom', 'extra': 'prologue injection', 'sid': '0', 'dir': '_i1/24' },
    { 'url': 'http://127.0.0.1:8000/static/admin/', 'extra': 'User agent behavior', 'sid': '0', 'dir': '_i1/25' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/26' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/sfi9876.zip', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/27' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i1/28' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/responsive.css/sfi9876.zip', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/29' },
    { 'url': 'http://127.0.0.1:8000/static/css/style.css/sfi9876.css', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i1/30' },
    { 'url': 'http://127.0.0.1:8000/static/css/style.css/?_test1=ccddeeeimmnossstwwxy.:\x5c\x5c\x5c&_test2=acdepsstw//&_test3=bhins//&_test4=CEEFLMORSTeeinnnosttx-*&_test5=cefhilnosu///&_test6=acceiilpprrrssttt1)(&_test7=aaaceijlprrsttv1):(', 'extra': 'IPS check', 'sid': '0', 'dir': '_i1/31' },
    { 'url': 'http://127.0.0.1:8000/static/img/profile.jpg/\x5c\x27\x5c\x22', 'extra': 'SQL injection', 'sid': '0', 'dir': '_i1/32' },
    { 'url': 'http://127.0.0.1:8000/transfers/\x27\x22\x27\x22\x27\x22\x27\x22', 'extra': 'SQL injection', 'sid': '0', 'dir': '_i1/33' },
    { 'url': 'http://127.0.0.1:8000/transfers/history', 'extra': 'User agent behavior', 'sid': '0', 'dir': '_i1/34' },
    { 'url': 'http://127.0.0.1:8000/transfers/home', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i1/35' },
    { 'url': 'http://127.0.0.1:8000/transfers/new', 'extra': 'inject behavior', 'sid': '0', 'dir': '_i1/36' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/', 'extra': '', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/', 'extra': '', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/responsive.css/', 'extra': '', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://127.0.0.1:8000/static/css/', 'extra': '', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://127.0.0.1:8000/static/css/style.css/', 'extra': '', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'http://127.0.0.1:8000/static/img/', 'extra': '', 'sid': '0', 'dir': '_i2/7' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://127.0.0.1:8000/static/css/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://127.0.0.1:8000/static/img/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i3/3' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i4/3' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://127.0.0.1:8000/static/css/', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://127.0.0.1:8000/static/img/', 'extra': '', 'sid': '0', 'dir': '_i5/3' },
    { 'url': 'http://127.0.0.1:8000/transfers/history', 'extra': '', 'sid': '0', 'dir': '_i5/4' },
    { 'url': 'http://127.0.0.1:8000/transfers/new', 'extra': '', 'sid': '0', 'dir': '_i5/5' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://127.0.0.1:8000/transfers/history', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://127.0.0.1:8000/transfers/new', 'extra': '', 'sid': '0', 'dir': '_i6/1' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://127.0.0.1:8000/admin/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/3' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/responsive.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/4' },
    { 'url': 'http://127.0.0.1:8000/static/css/style.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/5' },
    { 'url': 'http://127.0.0.1:8000/static/img/profile.jpg/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/6' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i8/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'WSGIServer/0.2 CPython/3.5.3', 'sid': '0', 'dir': '_i9/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': 'csrftoken', 'sid': '0', 'dir': '_i10/0' } ]
  }
];

