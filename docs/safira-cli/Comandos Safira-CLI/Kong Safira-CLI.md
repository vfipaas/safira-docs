---
sidebar_position: 5
---

###  Kong:deploy 

```bash 
safira-cli kong:deploy
```

Formas de utilização:

```bash 
USAGE
  $ safira-cli kong:deploy

OPTIONS
  -h, --help                     show CLI help
  --domain=domain                domain
  --enterprise=yes|no            Kong enterprise
  --license=license              Path to license file
  --mode=dbless|hybrid|standard  Kong mode (Hybrid only available in Kong Enterprise)
  --secure=yes|no                secure

EXAMPLE
  safira-cli kong:deploy
```
### Kong:remove

```bash 
safira-cli kong:remove
```

Formas de utilização:

```bash
USAGE
  $ safira-cli kong:remove

OPTIONS
  -h, --help                     show CLI help
  --domain=domain                domain
  --enterprise=yes|no            Kong enterprise
  --license=license              Path to license file
  --mode=dbless|hybrid|standard  Kong mode (Hybrid only available in Kong Enterprise)
  --secure=yes|no                secure

EXAMPLE
  safira-cli kong:deploy
  ```