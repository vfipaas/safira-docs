---
sidebar_position: 5
sidebar_label: Primeiro Projeto com Safira em Quarkus
title: Hello World
---

# Primeiro Projeto com Safira.

## Iniciando o projeto com o Quarkus.

![Hello World](/img/tutorial/QuarkusGIF.gif)

1. Crie uma pasta que você queira que seu projeto seja criado.
:::caution Importante que a pasta tenha seu nome em caixa baixa. 
:::
2. Na pasta criada abra um terminal de linha de comando da sua preferência (Bash, ZSH, e etc.).

3. Para criar um projeto use o comando:

```sh
safira-cli project:new PROJECT-NAME
```

**Substitua PROJECT-NAME pelo nome do projeto desejado ou use "." para criar o projeto na pasta atual.**

4. Escolha se deseja usar um arquivo OpenAPI ou um arquivo do Insomnia Workspace.

5. Diga o caminho de onde está seu arquivo OpenAPI(yaml/json) com as specs de seu projeto.

6. Escreva uma descrição para seu Projeto.

7. Escolha uma porta que seu projeto irá usar, por padrão o Safira usa a porta 8080. 

8. Escolha se deseja criar um mapeamento dos endpoints para o Kong.

9. Qual framework deseja trabalhar.

10. A nomenclatura dos pacotes java do projeto.

11. O Gerenciador de pacotes que deseja utilizar.

12. Pronto o seu projeto Hello World está criado.

![Hello-World](/img/screenshot/Hello15.png)


## Detalhes dos artefatos gerados após a criação do projeto JAVA

- Spring Boot
### Artefatos
Detalhes do projeto gerado em Quarkus:

![Safira Plushie](/img/screenshot/ArtefatosQuarkus.png)

:::caution Importante versionar essa pasta.Não adicionar no .gitignore 
:::

- A pasta .mvn: 
 -Possui o wrapper do maven, resumindo seria uma versão "portatil" do maven onde não precisa instalar no sistema operacional.

![Safira Quarkus](/img/screenshot/exemplo_mvn.png)

- A pasta .safira:
 -  docker: Pasta onde estará presente o Dockerfile do projeto

 - k8s: Pasta onde estão os arquivos do kubernetes.

 -  openapi-spec.yaml: Uma cópia da especificação openapi utilizada para a geração do projeto, quando utilizado o insomnia, é extraído a especificação e armazenada.

 -  project-settings.yml: No arquivo fica todas as configurações relacionadas ao projeto para serem utilizadas pelo safira-cli.

![Safira Plushie](/img/screenshot/exemplo_safira.png)

- docker:
  - Por padrão apenas um Dockerfile é criado, mas também é possível criar mais e Dockerfiles.

![Dockerfile Plushie](/img/screenshot/exemplo_dockerfile.png)

- kubernetes:
  - confimap.yaml: é feita uma cópia do application.properties

  - deployment.yaml: arquivo de deployment do kubernetes

  - namespace.yaml: arquivo para criação do namespace.

  - service.yaml: configurações do kubernetes para a service da aplicação.

![K8S Plushie](/img/screenshot/exemplo_k8s.png)

- Stubs gerados e models:
  - api: Todas as apis geradas a partir da especificação estarão descritas aqui.
  - model: Os models utilizados nas apis estarão aqui.

![Stubs Plushie](/img/screenshot/exemplo_stubsquarkus.png)


- Classes de testes geradas:

  -  Para cada interface será criada uma classe de teste. 

![Classes Plushie](/img/screenshot/exemplo_testquarkus.png)

  - Exemplo da classe de teste:

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

### A API usada para o passo a passo está disponível no repositório da NHS Digital.
[NHSDigital/hello-world-api](https://github.com/NHSDigital/hello-world-api)

