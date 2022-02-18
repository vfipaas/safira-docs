---
sidebar_position: 8
---

``
## project:build-publish

```bash 
safira-cli project:build-publish 
```

Formas de utilização:

```bash 
USAGE
  $ safira-cli project:build-publish

OPTIONS
  -h, --help                 show CLI help
  -v, --version=version      App Version
  --docker-file=docker-file  Dockerfile path
  --skip-test=yes|no         [default: no] Skip test

EXAMPLES
  safira-cli project:build
  safira-cli project:build --version 1.0.0 --skip-test true
  safira-cli project:build --docker-file ./src/main/docker/Dockerfile

```