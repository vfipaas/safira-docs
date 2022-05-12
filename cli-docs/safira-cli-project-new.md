<!-- order:28 -->
<!-- PLEASE! Don't edit this file, auto generated! -->

## `safira-cli project new [PROJECT-NAME]`

Create a new project

```
USAGE
  $ safira-cli project new [PROJECT-NAME] [--help] [-l <value>] [-f springboot|quarkus] [--new-project-root
    <value>] [-o <value>] [-i <value>] [--inso-spec-name <value>] [--project-description <value>] [--java-pack-manager
    gradle|maven] [--java-springboot-version <value>] [--java-package <value>] [--java-version java8|java11|java17]
    [--application-port <value>] [--docker-registry <value>] [--kubernetes-namespace <value>] [--kong-kubernetes yes|no]

ARGUMENTS
  PROJECT-NAME  Use '.' to create project into current folder or name of the project to create a new folder.

FLAGS
  -f, --framework=(springboot|quarkus)
  -i, --insomnia-workspace=<value>      Import OpenAPI file from the INSO Workspace.
  -l, --language=java                   Programming language to use
  -o, --openapi-file-path=<value>       The path to the OpenAPI file.
  --application-port=8080               Application port
  --docker-registry=localhost:5000      Docker registry
  --help                                Show CLI help.
  --inso-spec-name=<value>              The name of the INSO specification.
  --java-pack-manager=(gradle|maven)    Java package management
  --java-package=com.safira.demo        Java package
  --java-springboot-version=2.5.13      Springboot version
  --java-version=(java8|java11|java17)  Java version
  --kong-kubernetes=<option>            Generate Kong for Kubernetes configuration
                                        <options: yes|no>
  --kubernetes-namespace=default        Kubernetes namespace
  --new-project-root=<value>            The path where new projects will be created, relative to the new workspace root.
  --project-description=<value>         The description of the new project.

DESCRIPTION
  Create a new project

EXAMPLES
  $ safira-cli project new

  $ safira-cli project new app-name

  $ safira-cli project new app-name --language java11 --java-pack-manager gradle --application-port 8090

  $ safira-cli project new .  -create a project in the current folder
```
