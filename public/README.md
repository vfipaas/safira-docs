safira-cli
==========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@vfipaas/safira-cli.svg)](https://www.npmjs.com/package/@vfipaas/safira-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@vfipaas/safira-cli.svg)](https://www.npmjs.com/package/@vfipaas/safira-cli)
[![License](https://img.shields.io/npm/l/@vfipaas/safira-cli.svg)](https://github.com/vfipaas/safira-cli/blob/master/package.json)

<!-- toc -->
* [Requiments](#requiments)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

<!-- requiments-->
# Requiments
Before install safira-cli, check if you have installed the following dependencies:
- [python v3.6+](https://www.python.org/downloads/)
- [nodejs14+](https://nodejs.org/en/download/)
- [make](https://www.gnu.org/software/make/)
- [g++]()
- [jq](https://stedolan.github.io/jq/download/)
- [curl](https://curl.se/download.html)
- [java8+](https://www.java.com/pt-BR/download/manual.jsp)
- [maven](https://maven.apache.org/download.cgi)

<!-- requimentsstop-->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @vfipaas/safira-cli
$ safira-cli COMMAND
running command...
$ safira-cli (-v|--version|version)
@vfipaas/safira-cli/0.3.5 linux-x64 node-v14.18.2
$ safira-cli --help [COMMAND]
USAGE
  $ safira-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`safira-cli argocd:install`](#safira-cli-argocdinstall)
* [`safira-cli argocd:remove`](#safira-cli-argocdremove)
* [`safira-cli autocomplete [SHELL]`](#safira-cli-autocomplete-shell)
* [`safira-cli aws:credential:remove`](#safira-cli-awscredentialremove)
* [`safira-cli aws:credential:set`](#safira-cli-awscredentialset)
* [`safira-cli commands`](#safira-cli-commands)
* [`safira-cli dockerhub:credential:remove`](#safira-cli-dockerhubcredentialremove)
* [`safira-cli dockerhub:credential:set`](#safira-cli-dockerhubcredentialset)
* [`safira-cli gitlab:credential:remove`](#safira-cli-gitlabcredentialremove)
* [`safira-cli gitlab:credential:set`](#safira-cli-gitlabcredentialset)
* [`safira-cli help [COMMAND]`](#safira-cli-help-command)
* [`safira-cli insomnia:test`](#safira-cli-insomniatest)
* [`safira-cli kong:deploy`](#safira-cli-kongdeploy)
* [`safira-cli kong:remove`](#safira-cli-kongremove)
* [`safira-cli okteto:context`](#safira-cli-oktetocontext)
* [`safira-cli okteto:down`](#safira-cli-oktetodown)
* [`safira-cli okteto:up`](#safira-cli-oktetoup)
* [`safira-cli openapi:validate [FILE-PATH]`](#safira-cli-openapivalidate-file-path)
* [`safira-cli project:build-publish`](#safira-cli-projectbuild-publish)
* [`safira-cli project:cicd:configure`](#safira-cli-projectcicdconfigure)
* [`safira-cli project:new [PROJECT-NAME]`](#safira-cli-projectnew-project-name)
* [`safira-cli project:update`](#safira-cli-projectupdate)

## `safira-cli argocd:install`

Install the ArgoCD in the Kubernetes cluster

```
USAGE
  $ safira-cli argocd:install

OPTIONS
  -a, --verbose=yes|no             Verbose mode (All). Indicate to a formula that it should show log messages in more
                                   detail

  -h, --help                       show CLI help

  --HA=yes|no                      High Availability instance

  --admin-password=admin-password  [default: vkpr123] Admin password

  --default=yes|no                 Use to automatically fill inputs with default value provided on config.json

  --domain=domain                  [default: localhost] Domain

  --secure=yes|no                  Secure
```

## `safira-cli argocd:remove`

describe the command here

```
USAGE
  $ safira-cli argocd:remove

OPTIONS
  -a, --verbose  Verbose mode (All). Indicate to a formula that it should show log messages in more detail
  -h, --help     show CLI help
```

## `safira-cli autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ safira-cli autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ safira-cli autocomplete
  $ safira-cli autocomplete bash
  $ safira-cli autocomplete zsh
  $ safira-cli autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.1.1/src/commands/autocomplete/index.ts)_

## `safira-cli aws:credential:remove`

Remove AWS credential

```
USAGE
  $ safira-cli aws:credential:remove

OPTIONS
  --help  Show CLI help.

EXAMPLE
  safira-cli aws:credential:remove
```

## `safira-cli aws:credential:set`

Configure Docker Hub credential

```
USAGE
  $ safira-cli aws:credential:set

OPTIONS
  -a, --access-key-id=access-key-id          AWS access key id
  -s, --secret-access-key=secret-access-key  AWS secret access key
  --help                                     Show CLI help.

EXAMPLES
  safira-cli aws:credential:set
  safira-cli aws:credential:set --username=username --password=password
```

## `safira-cli commands`

list all the commands

```
USAGE
  $ safira-cli commands

OPTIONS
  -h, --help              Show CLI help.
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --hidden                show hidden commands
  --json                  Format output as json.
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v2.0.2/src/commands/commands.ts)_

## `safira-cli dockerhub:credential:remove`

Remove Docker Hub credential

```
USAGE
  $ safira-cli dockerhub:credential:remove

OPTIONS
  --help  Show CLI help.

EXAMPLE
  safira-cli dockerhub:credential:remove
```

## `safira-cli dockerhub:credential:set`

Configure Docker Hub credential

```
USAGE
  $ safira-cli dockerhub:credential:set

OPTIONS
  -p, --password=password  password
  -u, --username=username  username
  --help                   Show CLI help.

EXAMPLES
  safira-cli dockerhub:credential:set
  safira-cli dockerhub:credential:set --username=username --password=password
```

## `safira-cli gitlab:credential:remove`

Remove gitlab credential

```
USAGE
  $ safira-cli gitlab:credential:remove

OPTIONS
  --help  show CLI help

EXAMPLE
  safira-cli gitlab:credential:remove
```

## `safira-cli gitlab:credential:set`

Configure gitlab credential

```
USAGE
  $ safira-cli gitlab:credential:set

OPTIONS
  -e, --email=email        email
  -t, --token=token        token
  -u, --username=username  username
  --help                   show CLI help

EXAMPLES
  safira-cli gitlab:credential:set
  safira-cli gitlab:credential:set --email=user@safira-cli.com.br --username=sample_user 
  --token=EBAD5C4486AF077E245D287D7F3A4B59
```

## `safira-cli help [COMMAND]`

display help for safira-cli

```
USAGE
  $ safira-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.18/src/commands/help.ts)_

## `safira-cli insomnia:test`

describe the command here

```
USAGE
  $ safira-cli insomnia:test

OPTIONS
  -h, --help                       show CLI help
  --inso-spec-name=inso-spec-name  The name of the INSO specification.
```

## `safira-cli kong:deploy`

Install Kong in your k8s cluster

```
USAGE
  $ safira-cli kong:deploy

OPTIONS
  --domain=domain                domain
  --enterprise=yes|no            Kong enterprise
  --help                         show CLI help
  --license=license              Path to license file
  --mode=dbless|hybrid|standard  Kong mode (Hybrid only available in Kong Enterprise)
  --secure=yes|no                secure

EXAMPLE
  safira-cli kong:deploy
```

## `safira-cli kong:remove`

Remove kong

```
USAGE
  $ safira-cli kong:remove

OPTIONS
  --domain=domain                domain
  --enterprise=yes|no            Kong enterprise
  --help                         show CLI help
  --license=license              Path to license file
  --mode=dbless|hybrid|standard  Kong mode (Hybrid only available in Kong Enterprise)
  --secure=yes|no                secure

EXAMPLE
  safira-cli kong:remove
```

## `safira-cli okteto:context`

Change Okteto context

```
USAGE
  $ safira-cli okteto:context

OPTIONS
  --help  help for context
```

## `safira-cli okteto:down`

Destroy development container

```
USAGE
  $ safira-cli okteto:down

OPTIONS
  -c, --context=context      context where the down command is executed
  -f, --file=file            path to the manifest file (default 'okteto.yml')
  -n, --namespace=namespace  namespace where the up command is executed
  --help                     help for down
  --volumes                  remove persistent volume
```

## `safira-cli okteto:up`

Activate your development container

```
USAGE
  $ safira-cli okteto:up

OPTIONS
  -c, --context=context      context where the up command is executed
  -f, --file=file            path to the manifest file (default 'okteto.yml')
  -l, --loglevel=loglevel    amount of information outputted (debug, info, warn, error) (default 'warn')
  -n, --namespace=namespace  namespace where the up command is executed
  -r, --remote=remote        configures remote execution on the specified port
  --build                    build on-the-fly the dev image using the info provided by the 'build' okteto manifest field
  --help                     help for up
  --pull                     force dev image pull
  --reset                    reset the file synchronization database
```

## `safira-cli openapi:validate [FILE-PATH]`

Validates your openapi file.Supports json or yaml file.

```
USAGE
  $ safira-cli openapi:validate [FILE-PATH]

ARGUMENTS
  FILE-PATH  [default: ./openapi.json] Openapi template file location

OPTIONS
  --help  show CLI help

EXAMPLES
  safira-cli openapi:validate
  safira-cli openapi:validate ./openapi-sample.json
  safira-cli openapi:validate ./openapi-sample.yaml
```

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

## `safira-cli project:cicd:configure`

Help you configure your CI/CD pipeline for your project

```
USAGE
  $ safira-cli project:cicd:configure

OPTIONS
  -e, --email=email        email
  -t, --token=token        token
  -u, --username=username  username
  --help                   Show CLI help.

EXAMPLE
  safira-cli project:cicd:configure
```

## `safira-cli project:new [PROJECT-NAME]`

Create a new project

```
USAGE
  $ safira-cli project:new [PROJECT-NAME]

ARGUMENTS
  PROJECT-NAME  name of the project

OPTIONS
  -f, --framework=(springboot|quarkus)
  -i, --insomnia-workspace=insomnia-workspace  Import OpenAPI file from the INSO Workspace.
  -l, --language=java                          Programming language to use
  -o, --openapi-file-path=openapi-file-path    The path to the OpenAPI file.
  --application-port=8080                      Application port
  --docker-registry=localhost:5000             Docker registry
  --help                                       show CLI help
  --inso-spec-name=inso-spec-name              The name of the INSO specification.
  --java-pack-manager=(gradle|maven)           Java package management
  --java-package=com.safira.demo               Java package
  --java-springboot-version=2.5.9              Springboot version
  --kong-kubernetes=yes|no                     Generate Kong for Kubernetes configuration
  --kubernetes-namespace=default               Kubernetes namespace

  --new-project-root=new-project-root          The path where new projects will be created, relative to the new
                                               workspace root.

  --project-description=project-description    The description of the new project.

EXAMPLES
  safira-cli project:new
  safira-cli project:new app-name
  safira-cli project:new app-name --language java11 --java-pack-manager gradle --application-port 8090
  safira-cli project:new .  -create a project in the current folder
```

## `safira-cli project:update`

describe the command here

```
USAGE
  $ safira-cli project:update

OPTIONS
  -h, --help                                   show CLI help
  -i, --insomnia-workspace=insomnia-workspace  Import OpenAPI file from the INSOMNIA Workspace.
  -o, --openapi-file-path=openapi-file-path    The path to the OpenAPI file.
  --inso-spec-name=inso-spec-name              The name of the INSO specification.
```
<!-- commandsstop -->
