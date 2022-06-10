---
sidebar-label: Quarkus
title: Quarkus
---
# Principais erros no uso do safira-cli gerando um projeto em Quarkus.

### 401ResponseBodyApplication

![error](/img/screenshot/errors_401ResponseBody.png)

- Quando um projeto em Quarkus é criado em uma pasta que contenha letras maisculas no nome o projeto não é gerado corretamente, para evitar esse problema mantenha suas pastas apenas em caixa baixa e rode o comando de geração do projeto novamente: 
 
```sh
safira-cli project:new PROJECT-NAME
``` 