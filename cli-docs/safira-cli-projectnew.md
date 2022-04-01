<!-- order:24 -->
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
