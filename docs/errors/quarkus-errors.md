---
sidebar-label: Quarkus
title: Quarkus
---
# Most common error using safira-cli generation a Quarkus project.
### 401ResponseBodyApplication

![error](/img/screenshot/errors_401ResponseBody.png)

- Quando um projeto em Quarkus é criado em uma pasta que contenha letras maisculas no nome o projeto não é gerado corretamente, para evitar esse problema mantenha suas pastas apenas em caixa baixa e rode o comando de geração do projeto novamente: 
 
- When a Quarkus project is generated on a folder that have Capital letters on its name the project isn't generate correctly, to avoid this problem keep your folder only in lower case and run the command to generate a new project again:

```sh
safira-cli project:new PROJECT-NAME
``` 