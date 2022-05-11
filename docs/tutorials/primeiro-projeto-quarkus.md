---
sidebar_position: 2
sidebar_label: Primeiro Projeto com Safira em Quarkus
title: Hello World
---

# Primeiro Projeto com Safira.

## Iniciando o projeto com o Quarkus.

1. Crie uma pasta que você queira que seu projeto seja criado.

2. Na pasta criada abra um terminal de linha de comando da sua preferência (Bash, ZSH, e etc.).

![Hello World](/img/screenshot/Hello1.png)



3. Para criar um projeto use o comando:

```sh
safira-cli project:new PROJECT-NAME
```

![Hello-World](/img/screenshot/Hello2.png)



**Substitua PROJECT-NAME pelo nome do projeto desejado ou use "." para criar o projeto na pasta atual.**

4. Escolha se deseja usar um arquivo OpenAPI ou um arquivo do Insomnia Workspace.

![Hello-World](/img/screenshot/Hello3.png)


5. Diga o caminho de onde está seu arquivo OpenAPI(yaml/json) com as specs de seu projeto.

![Hello-World](/img/screenshot/Hello4.png)


6. Escreva uma descrição para seu Projeto.

![Hello-World](/img/screenshot/Hello5.png)



7. Escolha uma porta que seu projeto irá usar, por padrão o Safira usa a porta 8080. 

![Hello-World](/img/screenshot/Hello6.png)



8. Escolha se deseja criar um mapeamento dos endpoints para o Kong.

![Hello-World](/img/screenshot/Hello7.png)



9. Qual framework deseja trabalhar.

![Hello-World](/img/screenshot/Hello16.png)


10. A nomenclatura dos pacotes java do projeto.

![Hello-World](/img/screenshot/Hello17.png)


11. O Gerenciador de pacotes que deseja utilizar.

![Hello-World](/img/screenshot/Hello18.png)



12. Pronto o seu projeto Hello World está criado.

![Hello-World](/img/screenshot/Hello15.png)



### A API usada para o passo a passo está disponível no repositório da NHS Digital.
[NHSDigital/hello-world-api](https://github.com/NHSDigital/hello-world-api)

