---
title: Reversing PyInstaller
---

### TL;TR

```
$ unzip [file]
$ python3 pyinstxtractor.py [file]
$ uncompyle6 [file.pyc|file.pyo]
```

### Identification

```
$ strings [file]
...
lib-dynload/_bisect.cpython-38-x86_64-linux-gnu.so
blib-dynload/_blake2.cpython-38-x86_64-linux-gnu.so
blib-dynload/_bz2.cpython-38-x86_64-linux-gnu.so
blib-dynload/_codecs_cn.cpython-38-x86_64-linux-gnu.so
blib-dynload/_codecs_hk.cpython-38-x86_64-linux-gnu.so
...
```

### References

- https://github.com/extremecoders-re/pyinstxtractor
- https://github.com/rocky/python-uncompyle6?tab=readme-ov-file#installation
