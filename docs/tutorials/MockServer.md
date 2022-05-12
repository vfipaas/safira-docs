---
sidebar_position: 4
sidebar_label: Tutorial MockServer 
title: Instalação MockServer
---

# Mockserver.

Mock Server e um serviço para simulação do fluxo de uma requisição de modo obter uma resposta esperada a mesma:
exemplo: o retorno de uma requisão a uma API:

## Fluxo:

![Fluxo_Mock](/img/screenshot/Fluxo_Mock.png)


## Instalação do Mock Server:
Instalação do Mock Server:

O mock server pode ser instalado de varias formas (executavel Java, Docker, Kubernetes, Deploy servers Java);

Iremos utilizar nesse tutorial a instalação via Heml indicada para ambiente kuberntes:

1. configuração do chart:
```
helm repo add mockserver https://www.mock-server.com
helm repo update
```
2. install hell via mockserver
```
helm upgrade --install --namespace mockserver --create-namespace --version 5.13.2 mockserver mockserver/mockserver
```

3. exportando a porta para acesso via UI:
```
kubectl -n mockserver port-forward svc/mockserver 1080:1080
```
4. Link da UI:
```
http(s)://<host>:<port>/mockserver/dashboard

Exemplo:

http://localhost:1080/mockserver/dashboard
```

![Mock_UI](/img/screenshot/Mock_ui.png)

5. Uninstall MockServer via heml:
```
helm delete -n mockserver mockserver
```
## O tutorial de cada uma deles pode ser obtido no link: 

https://www.mock-server.com/mock_server/running_mock_server.html 


