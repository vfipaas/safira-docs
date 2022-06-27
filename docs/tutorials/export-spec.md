---
sidebar_position: 2
sidebar_label: Exportando uma Specification
title: Specification
---

# Exportando Specification.

## O que é uma Specification(Spec)?

**Specification** é um conceito introduzido por **Eric Evans**, no Livro Domain Driven Design. A ideia do conceito é que você consiga encadear todas as suas regras de 
negócio como uma query utilizada em busca na base de dados.

## Como exportar sua Spec?
1. Crie um projeto e defina suas tecnologias:

```sh
safira-cli project:new PROJECT-NAME
```

![Specification](/img/screenshot/CreateProject.gif)

2. Exportando a Spec:

Ao selecionar **"Sim"** defina um diretório(path) para salvar a Spec, não será aceito diretórios inválidos!
- A SPEC será salva com a seguinte formatação:
```sh
PROJECT-NAME-openapi.yaml
```


![Specification](/img/screenshot/ExportSpec.gif)











