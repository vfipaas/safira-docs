<!-- order:22 -->
<!-- PLEASE! Don't edit this file, auto generated! -->

## `safira-cli project:build-publish`

Build your project generating docker image.

```
USAGE
  $ safira-cli project:build-publish

OPTIONS
  -v, --version=version      App Version
  --docker-file=docker-file  Dockerfile path
  --help                     show CLI help
  --skip-test=yes|no         [default: no] Skip test

EXAMPLES
  safira-cli project:build-publish
  safira-cli project:build-publish --version 1.0.0 --skip-test true
  safira-cli project:build-publish --docker-file ./src/main/docker/Dockerfile
```
