---
sidebar_position: 1
sidebar_label: Prerequisites
title: Linux Installation
---
## Installing in Debian/Ubuntu
Installation demostration on Linux Debian/Ubuntu

## Prerequisites

  - **[docker](https://docs.docker.com/engine/install/)**

  - **[curl](https://curl.se/download.html)**

  - **[java8+](https://www.java.com/pt-BR/download/manual.jsp)**

  - **[git](https://maven.apache.org/download.cgi)**


### Check your dependencies with safira-doctor.
```sh
npx @vfipaas/safira-doctor
```
:::note

If you don't have npx on your device **[please follow the instructions for node](#install-node16-using-nvm)** and comeback to this step.
:::

![safira-doctor-output](/img/installation/safira-doctor-output.png)


If got the same result as the above please follow to **[Safira-Cli installationg](./safira-cli.md)**. Otherwise please refer to the instructions below to install the remaining dependencies that are not compatible with the prerequisites.

## Dependencies

```bash
sudo apt update
sudo apt install zip unzip curl -y
```

### Installing Docker
[More about Docker](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)
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

### Installing Java using SdkMan
[More about SdkMan](https://sdkman.io/)
```bash
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
source ~/.bashrc 
sdk install java 11.0.12-open
```

### Remaining dependencies
```bash
sudo apt update
sudo apt install curl 
```

### Install Node16 using nvm
[More about nvm](https://github.com/nvm-sh/nvm)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install 16
```

