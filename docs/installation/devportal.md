---
sidebar_position: 3
sidebar_label: DevPortal
title: DevPortal
---

## Prerequisites

- **[Safira-CLI](./safira-cli.md)**
- **[Okta](../tutorials/config-okta.mdx)**
- **Cluster Kubernetes**

## DevPortal Installation Stack

This installation stack contains:

- **Kong**

- **Mockserver**

- **Devportal**

:::info To complete the Installation process you will need Okta credentials, for a quick tutorial **[Click here](../tutorials/config-okta.mdx#credentials)**.
:::

Run this command for the stack installation:

```bash
safira-cli devportal stack install
```

![Devportal Setup](/img/screenshot/DevPortalSetup.gif)