---
sidebar_position: 1
sidebar_label: pré-requisitos
title: Pré-requisitos
---

## Pré-Requisitos

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

## Instalando no Debian/Ubuntu
Exemplo de instalação no Debian/Ubuntu.

### dependências
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

### Instalando NodeJS 14 usando nvm
[Mais sobre o nvm](https://github.com/nvm-sh/nvm)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install 14
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
