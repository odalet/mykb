# Ops - Docker

## Docker For Windows

* Running Linux and Windows containers SxS: <https://devblogs.microsoft.com/premier-developer/running-docker-windows-and-linux-containers-simultaneously/>
* *OW
  * LCOW vs Moby: <https://docs.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/linux-containers>
  * WCOW: <https://docs.microsoft.com/en-us/virtualization/windowscontainers/quick-start/quick-start-windows-10>
  * LCOW Epic on moby project: <https://containerjournal.com/2016/10/28/linux-vs-windows-containers-whats-difference/>
* Kube
  * Kubernetes on Windows options (minikube vs docker for windows' kub): <https://learnk8s.io/blog/installing-docker-and-kubernetes-on-windows/>
  * Docker for Windows doc: <https://docs.docker.com/docker-for-windows/kubernetes/>
  * Deploy Kubernetes Web UI (Dashboard) on Docker for Windows: <https://www.ntweekly.com/2018/05/25/deploy-kubernetes-web-ui-dashboard-docker-windows/>
    * use <https://raw.githubusercontent.com/kubernetes/dashboard/master/aio/deploy/recommended/kubernetes-dashboard.yaml> instead of <https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard.yaml> for the `kubectl create -f` command.
    * modify the yml and add `- --enable-skip-login` near the comment in `kubernetes-dashboard` container specification (this has the **skip** button appear in the login page).
    * in order to modify the service config, use `kubectl apply -f kubernetes-dashboard.yaml`.

## Docker Development

* <https://itnext.io/dockerizing-net-core-app-a-case-study-on-the-allready-app-4d4a3b01a12a>
* VSCode
  * Visual Studio Code Remote - Containers: <https://www.youtube.com/watch?v=TVcoGLL6Smo>
  * <https://code.visualstudio.com/docs/remote/containers>
* [Devcontainers AKA performance in a secure sandbox](https://blog.johnnyreilly.com/2020/08/devcontainers-aka-performance-in-secure.html)

## Docker Tooling

* <https://www.lemondeinformatique.fr/actualites/lireamp-12-outils-open-source-pour-ameliorer-docker-75082.html>
  * Dive: <https://github.com/wagoodman/dive>
  * Docker Compose UI: <https://github.com/francescou/docker-compose-ui>
  * Dockly: <https://github.com/lirantal/dockly>
  * Dusty: <https://github.com/gamechanger/dusty>
  * Elsy: <https://github.com/cisco/elsy>
  * Gockerize: <https://github.com/redbooth/gockerize>
  * Habitus: <http://www.habitus.io/>
  * Hyperd: <https://github.com/hyperhq/hyperd>
  * Kytematic: <https://github.com/docker/kitematic>
  * Logspout: <https://github.com/gliderlabs/logspout>
  * Portainer: <https://github.com/portainer/portainer>
  * Whalebrew: <https://github.com/whalebrew/whalebrew>

## Example Docker-deployed projects

* Lessons learned porting Octopus Server to .NET Core 3.1 (especially, the § concerning SSL certificates): <https://octopus.com/blog/octopus-server-dotnet-core-lessons-learned>
* Onedev: <https://code.onedev.io/projects/onedev-manual/blob>
* OPNFV Barometer Docker Install Guide: <https://opnfv-barometer.readthedocs.io/en/latest/release/userguide/installguide.docker.html>
* Docker Official Images:
  * <https://github.com/docker-library/official-images/blob/master/README.md#library-definition-files>
  * <https://github.com/docker-library/ghost>
  * <https://github.com/influxdata/influxdata-docker/blob/master/circle-test.sh>
* Private Registry:
  * <https://www.digitalocean.com/community/tutorials/how-to-set-up-a-private-docker-registry-on-ubuntu-14-04>

## Docker for CI/CD

* Docker.DotNet: <https://github.com/Microsoft/Docker.DotNet>
* A way to use Docker for integration tests: <https://jeremydmiller.com/2018/08/27/a-way-to-use-docker-for-integration-tests/>

## Docker + .NET

* [Docker with Real Applications](https://visualstudiomagazine.com/articles/2019/02/01/docker-with-real-applications.aspx)
* [Dealing with Databases (and Data) in Docker](https://visualstudiomagazine.com/articles/2019/03/01/dealing-with-databases.aspx)
* [Using .NET and Docker Together](https://devblogs.microsoft.com/dotnet/using-net-and-docker-together/)
* [Using .NET and Docker Together – DockerCon 2018 Update](https://devblogs.microsoft.com/dotnet/using-net-and-docker-together-dockercon-2018-update/)
* [Staying up-to-date with .NET Container Images](https://devblogs.microsoft.com/dotnet/staying-up-to-date-with-net-container-images/)
* [Collecting .NET Core Linux Container CPU Traces from a Sidecar Container](https://devblogs.microsoft.com/dotnet/collecting-net-core-linux-container-cpu-traces-from-a-sidecar-container/)
* [Building .NET Core container images using S2I](https://developers.redhat.com/blog/2018/12/13/building-net-core-container-images-using-s2i/)
* [Reduce application image build times with .NET Core incremental builds](https://developers.redhat.com/blog/2019/04/08/reduce-application-image-build-times-with-net-core-incremental-builds/)
* Logging
  * NLog + Graylog + Docker: <https://sachabarbs.wordpress.com/2020/08/24/setting-up-graylog-for-use-with-nlog/>
* Azure
  * [Azure Container Instances - Docker integration now in Docker Desktop stable release](https://azure.microsoft.com/en-us/blog/azure-container-instances-docker-integration-now-in-docker-desktop-stable-release/)
  * [Docker for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

## Misc

* [Using docker to generate CA, server & client certificates for TESTING](https://danielwertheim.se/using-docker-to-generate-ca-server-and-client-certificates-for-testing/)
* [Walk through Running Træfik on Service Fabric Local Cluster](https://devblogs.microsoft.com/premier-developer/walk-through-running-traefik-on-service-fabric-local-cluster/)

### Packer

Made by [HashiCorp](https://www.packer.io/intro/index.html):

* Docker Packer: <https://packer.io/docs/builders/docker.html>
* Docker Post-Processor: <https://packer.io/docs/post-processors/docker-save.html>...
