---
sidebar_position: 4
sidebar_label: Exporting a Specification
title: Specification
---

# Exporting a Specification

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
