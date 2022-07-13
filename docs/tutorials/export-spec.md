---
sidebar_position: 2
sidebar_label: Exporting a Specification
title: Specification
---

# Exportando Specification.
# Exporting a Specification

## O que é uma Specification(Spec)?


**Specification** é um conceito introduzido por **Eric Evans**, no Livro Domain Driven Design. A ideia do conceito é que você consiga encadear todas as suas regras de 
negócio como uma query utilizada em busca na base de dados.

## What is a Specification(Spec)?

**Specification** it's a concept introduced by **Eric Evan** in the book *Domain Driven Design*. The concept idea is to chain up all your business in a similar way you do querys on a database search.

## How to export your Spec?

1. Create a project and define your tecnologies:

```sh
safira-cli project:new PROJECT-NAME
```

![Specification](/img/screenshot/CreateProject.gif)

2. Exporting your spec:
When choosing **"Yes"** set a directory(path) to save your Spec. Invalid paths will not be accepted.
- Your Spec is going to be save as:
```sh
PROJECT-NAME-openapi.yaml
```


![Specification](/img/screenshot/ExportSpec.gif)











