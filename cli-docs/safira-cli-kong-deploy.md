<!-- order:20 -->
<!-- PLEASE! Don't edit this file, auto generated! -->

## `safira-cli kong deploy`

Install Kong in your k8s cluster

```
USAGE
  $ safira-cli kong deploy [--help] [--domain <value>] [--secure yes|no] [--mode dbless|hybrid|standard]
    [--enterprise yes|no] [--license <value>]

FLAGS
  --domain=<value>       domain
  --enterprise=<option>  Kong enterprise
                         <options: yes|no>
  --help                 Show CLI help.
  --license=<value>      Path to license file
  --mode=<option>        Kong mode (Hybrid only available in Kong Enterprise)
                         <options: dbless|hybrid|standard>
  --secure=<option>      secure
                         <options: yes|no>

DESCRIPTION
  Install Kong in your k8s cluster

EXAMPLES
  $ safira-cli kong deploy
```
