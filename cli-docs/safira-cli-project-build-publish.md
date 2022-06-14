<!-- order:30 -->
<!-- PLEASE! Don't edit this file, auto generated! -->

## `safira-cli project build-publish`

Build your project generating docker image.

```
USAGE
  $ safira-cli project build-publish [--help] [--docker-file <value>] [-v <value>] [--skip-test yes|no]

FLAGS
  -v, --version=<value>  App Version
  --docker-file=<value>  Dockerfile path
  --help                 Show CLI help.
  --skip-test=<option>   Skip test
                         <options: yes|no>

DESCRIPTION
  Build your project generating docker image.

EXAMPLES
  $ safira-cli project build-publish

  $ safira-cli project build-publish --version 1.0.0 --skip-test true

  $ safira-cli project build-publish --docker-file ./src/main/docker/Dockerfile
```
