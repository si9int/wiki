---
title: Upgrading Shells to Interactive TTYs
description: A reference page in my new Starlight docs site.
---

### TL;TR

```
python3 -c 'import pty; pty.spawn("/bin/bash")'
[CTRL-Z]
stty -a
fg
reset
export SHELL=bash
export TERM=xterm-256color
stty rows [N] columns [M]
```
`N` and `M` are defined in the output of `stty -a` (namely columns and rows).

### References

- https://blog.ropnop.com/upgrading-simple-shells-to-fully-interactive-ttys/
- https://jonathanh.co.uk/blog/upgrading-reverse-shells/