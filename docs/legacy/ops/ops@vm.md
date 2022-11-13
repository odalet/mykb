# Ops - VM

## Misc / Fun

* [Run MacOS 8 or Windows 95 in an Electron app](https://www.clubic.com/pro/entreprises/apple/actualite-7809-sr-naim-windows-95-et-macos-8-sont-maintenant-telechargeables-en-tant-qu-applications-sur-vos-ordinateurs.html)

## Grafana / Influxdb deployment (Ansible + Docker)

* Grafana, InfluxDB and Telegraf deployment automation with Ansible: <https://github.com/paralect/deploy-grafana>

## Packer

Made by [HashiCorp](https://www.packer.io/intro/index.html):

* [Builders](https://www.packer.io/docs/builders/index.html)
  * Docker
  * File
  * HyperV (from ISO or VMCX)
  * QEmu
  * VirtualBox (from ISO or OVF)
  * VMWare (from ISO or VMX)
* [Provisioners](https://www.packer.io/docs/provisioners/index.html):
  * File
  * PowerShell
  * Shell
  * Windows Shell
  * Windows Restart
* [Post-Processors](https://www.packer.io/docs/post-processors/index.html)
  * Compress: _.zip, .tar, .gz, .tar.gz, .lz4 and .tar.lz4_
  * Docker...
  * Manifest
  * Shell
  * *Vagrant*: makes a _box_ that can target: AWS, Azure, DigitalOcean, *Hyper-V*, LXC, Parallels, QEMU, *VirtualBox* , *VMware* , *Docker*

Links:

* Use Packer to create an ISO for a physical server: <https://groups.google.com/forum/#!topic/packer-tool/v5U2spAQjQc> (last link broken)
* Example Packer scripts here: <https://github.com/Microsoft/azure-pipelines-image-generation> - these are the images used by MS in Azure DevOps' Pipelines (aka VSTS)
  * Windows Server 2012 R2 or 2016 or Windows 1803 + VS 2015 / 2017 (Enterprise Editions)
  * Linux: Ubuntu 1604

## AppRolla

Deployment Framework in PS inspired by Capistrano (made by AppVeyor): <https://github.com/appveyor/AppRolla>
