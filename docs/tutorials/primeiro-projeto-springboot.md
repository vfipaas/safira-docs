---
sidebar_position: 5
sidebar_label: First project with Safira using Spring Boot
title: Hello World
---

# First project with Safira 

## Starting your project using Spring Boot
![Hello World](/img/tutorial/springbootig.gif)

1. Create a new file that you want your project to be in.
:::caution Important that the file has the name in lower case.
:::
2. On the new directory open a terminal of your preference(Bash, ZSH, etc.)

3. To start a project run the command:

```sh
safira-cli project:new PROJECT-NAME
```

**Change "PROJECT-NAME" for the name that you want for your project or use "." to create the project on the current folder.**

4. Chose if you want to use an OpenAPI file or an Insomnia Workspace file.

5. Say the path that your OpenAPI(yaml/json) file it's located with your project specification.

6. Write a description for you project.

7. Chose a port that your project is gonna be in, as default Safira-CLI uses port 8080.

8. Chose if you want to map Kong endpoints.

9. Which framework you wish to work with.

10. Which Java version you wish to use on your project.

11. Your package manager.

12. The framework's version.

13. The name of the Java's packages.

14. The Docker registry.

15. Kubernetes namespace.

16. Done! Your Hello World project is created.

![Hello-World](/img/screenshot/Hello15.png)


## Details of generated artifacts.

- Spring Boot
### Artefacts

Details of the project generated using Springboot:

![Safira Plushie](/img/screenshot/exemplo_artefatos.png)

:::caution Import to version this file. Don't add on .gitignore
:::

- .safira Folder:

 - docker: Folder where Dockerfile is gonna be located.
 
 - k8s: Folder where kubernetes files are located.

 - openapi-spec.yaml: A copy of the specification that was used to generate the project, when using insomnia the specification is extracted and storaged.

 - project-settings.yml: In this file there are all the settings related to the project for Safira-CLI use as reference.

![Safira Plushie](/img/screenshot/exemplo_safira.png)

- docker:
 - As default only one Dockerfile is generated, but is possible to create more.

![Dockerfile Plushie](/img/screenshot/exemplo_dockerfile.png)

-- kubernetes:
  - confimap.yaml: A copy of application.properties

  - deployment.yaml: Kubernetes' deployment file.

  - namespace.yaml: File for creation of the namespace.

  - service.yaml: Kubernetes' API service settings.

![K8S Plushie](/img/screenshot/exemplo_k8s.png)

- Generated Stubs and models:
  - api: All generated APIs will be disclosed here.
  - model: Models that the API will use are here.

![Stubs Plushie](/img/screenshot/exemplo_stubs.png)


- Generated class tests:
  - For each interface generated will be a test class.

![Classes Plushie](/img/screenshot/exemplo_classes.png)

- Class tess example:

```yaml
package com.safira.demo.api;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

@QuarkusTest
public class PetApiTest {

  @Test
  public void test() {}
}

```
- Okteto template:

```yaml
name: mvn-quarkus-end-app
image: okteto/maven:3
command: bash
volumes:
- /root/.m2
sync:
  - .:/usr/src/app
autocreate: true
forward:
  - 8080:8080
  - 5005:5005

```

### The used API for the step-by-step is available on NHS Digital's repository.
[NHSDigital/hello-world-api](https://github.com/NHSDigital/hello-world-api)


