---
sidebar_position: 1
sidebar_label: deploy
---
## `safira-cli kong:deploy`

Install Kong in your k8s cluster

```
USAGE
  $ safira-cli kong:deploy

OPTIONS
  --domain=domain                domain
  --enterprise=yes|no            Kong enterprise
  --help                         show CLI help
  --license=license              Path to license file
  --mode=dbless|hybrid|standard  Kong mode (Hybrid only available in Kong Enterprise)
  --secure=yes|no                secure

EXAMPLE
  safira-cli kong:deploy
```