---
sidebar_position: 2
sidebar_label: DevPortal
title: DevPortal
---

## Pré-requisitos
- **[Safira-CLI](./safira-cli.md)**
- **[Okta](../tutorials/config-okta.mdx)**
- **Cluster Kubernetes**



## Instalação DevPortal Stack
Essa instalação irá conter:

- **Kong**

- **Mockserver**

- **Devportal**


:::info Para essa instalação é necessário ter as credenciais do Okta, para um breve tutorial **[Clique aqui](../tutorials/config-okta.mdx#credenciais)**
:::
Comando para instalação do devportal:

```bash
safira-cli devportal stack install
```

![Devportal Setup](/img/screenshot/DevPortalSetup.gif)
