---
sidebar_position: 5
sidebar_label: Instalando e Configurando Okteto
title: Instalando e Configurando Okteto
---


## Instalando Okteto

Instale Okteto seguindo os passos seguintes:

```
$ curl https://get.okteto.com -sSfL | sh
```
![Okteto](/img/screenshot/Okteto/Okteto1.png)
## Configurando o Okteto.

Você pode iniciar um ambiente de desenvolvimento remoto com [Okteto Cloud](https://cloud.okteto.com/) ou qualquer cluster Kubernetes com a Okteto CLI, nesse guia usaremos a Okteto Cloud.
A primeira coisa que você precisa fazer é configurar a Okteto CLI para usar a Okteto Cloud, para isso rode este comando:

```
$ okteto context use https://cloud.okteto.com
```

![Okteto](/img/screenshot/Okteto/Okteto2.png)

Você pode confirmar que sua CLI está configurando rodando o comando a seguir: 

```
$ okteto context list
```

![Okteto](/img/screenshot/Okteto/Okteto3.png)

##Iniciando sua aplicação

Gerando sua aplicação pelo Safira-CLI já garante a criação de um [manifesto do Okteto](https://www.okteto.com/docs/reference/manifest/) e usaremos ele para subir nossa aplicação ao ambiente de desenvolvimento 
usando o seguinte comando. 

```
$ okteto up
```

![Okteto](/img/screenshot/Okteto/Okteto4.png)

Após isso você terá acesso aos endpoints da sua aplicação através do [Okteto Cloud](https://cloud.okteto.com/)

![Okteto](/img/screenshot/Okteto/Okteto5.png)