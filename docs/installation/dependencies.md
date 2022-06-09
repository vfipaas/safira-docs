---
sidebar_position: 1
sidebar_label: Pré-requisitos
title: Instalação Linux
---
## Instalando no Debian/Ubuntu
Exemplo de instalação no Debian/Ubuntu.

## Pré-requisitos

  - **[docker](https://docs.docker.com/engine/install/)**

  - **[node_gyp](https://www.npmjs.com/package/node-gyp)**

  - **[python_v3.6+](https://www.python.org/downloads/)**

  - **[nodejs14+](https://nodejs.org/en/download/)**

  - **[make](https://www.gnu.org/software/make/)**
  
  - **[cmake](https://cmake.org/download/)**

  - **[g++](http://www.qnx.com/developers/docs/6.5.0SP1.update/com.qnx.doc.neutrino_utilities/g/gxx.html)**

  - **[jq](https://stedolan.github.io/jq/download/)**

  - **[curl](https://curl.se/download.html)**

  - **[java8+](https://www.java.com/pt-BR/download/manual.jsp)**

  - **[maven](https://maven.apache.org/download.cgi)**

### Utilize o safira-doctor para verificar se os pré-requisitos estão instalados
```sh
npx @vfipaas/safira-doctor
```
:::note

Caso não possua o npx instalado, **[siga essa instrução para o node](#instalando-nodejs-16-usando-nvm)** e volte novamente para este passo.

:::

![safira-doctor-output](/img/installation/safira-doctor-output.png)

Se obteve uma resposta como o exemplo acima siga para **[Instalação do Safira-CLI](./safira-cli)**. Caso obtenha uma resposta diferente da mostrada no exemplo acima, por favor refira-se as instruções abaixo para a instalação da(s) dependência(s) que não estão compativeis com os pré-requisitos. 



## Dependências

```bash
sudo apt update
sudo apt install zip unzip curl -y
```

### Instalando Docker
[Mais sobre docker](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)
```bash
sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release -y && \
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg && \
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null && \
sudo apt-get update && \
sudo apt-get install docker-ce docker-ce-cli containerd.io -y && \
sudo usermod -aG docker $USER && \
newgrp docker
```

### Instalando NodeJS 16 usando nvm
[Mais sobre o nvm](https://github.com/nvm-sh/nvm)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install 16
```

### Instalando Java usando o SdkMan
[Mais sobre o SdkMan](https://sdkman.io/)
```bash
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
source ~/.bashrc 
sdk install java 11.0.12-open
```

### Instalando demais dependências
```bash
sudo apt update
sudo apt install node-gyp make cmake g++ jq curl maven
```