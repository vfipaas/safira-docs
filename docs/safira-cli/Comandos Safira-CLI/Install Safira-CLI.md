---
sidebar_position: 1
---

### Instalação Safira-CLI

Comando para instalação global:

```bash
npm install -g @vfipaas/safira-cli
```

Ver a versão do safira-cli:

```bash
safira-cli (-v|--version|version)
```

Criar um projeto Safira-CLI:

Comando para criação do projeto:

```bash
safira-cli project:new [PROJECT-NAME]

```
Criar o projeto dentro de uma pasta já existente:

```bash
safira-cli project:new .

```
Comandos para utilização:

```bash
  safira-cli project:new [PROJECT-NAME]

ARGUMENTS
  PROJECT-NAME  name of the project

OPTIONS
  -f, --framework=(springboot|quarkus)
  -h, --help                                 show CLI help
  -i, --openapi-inso-path=openapi-inso-path  Import OpenAPI file from the INSO Workspace.
  -l, --language=java                        Programming language to use
  -o, --openapi-file-path=openapi-file-path  The path to the OpenAPI file.
  --application-port=8080                    Application port
  --docker-registry=localhost:5000           Docker registry
  --inso-spec-name=inso-spec-name            The name of the INSO specification.
  --java-pack-manager=(gradle|maven)         Java package management
  --java-package=com.safira.demo             Java package
  --java-springboot-version=2.5.9            Springboot version
  --kong-kubernetes=yes|no                   Generate Kong for Kubernetes configuration
  --kubernetes-namespace=default             Kubernetes namespace
  --new-project-root=new-project-root        The path where new projects will be created, relative to the new workspace root.
  --project-description=project-description  The description of the new project.

EXAMPLES
  safira-cli project:new
  safira-cli project:new app-name
  safira-cli project:new app-name --language java11 --java-pack-manager gradle --application-port 8090
  safira-cli project:new .  -create a project in the current folder
```
### Como utilizar o Safira-CLI 

Agora você pode acessar alguns comandos principais que irá te ajudar em sua utilização:

```bash

  $ safira-cli commands

OPTIONS
  -h, --help              show CLI help
  -j, --json              display unfiltered api data in json format
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --hidden                show hidden commands
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```
