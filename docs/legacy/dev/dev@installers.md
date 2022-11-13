# Installers

## WixSharp

* https://github.com/oleg-shilo/wixsharp
* Codeproject: 
	* https://www.codeproject.com/Articles/1231849/Creating-a-Wixsharp-Installer-that-Includes-Prereq
	* https://www.codeproject.com/Articles/1232233/Creating-a-Wixsharp-Installer-That-Includes-Prer
	* https://www.codeproject.com/Articles/1234160/Creating-a-Wixsharp-Installer-that-Includes-Prer
	* https://www.codeproject.com/Articles/31407/Wix-WixSharp-managed-interface-for-WiX-2
	* https://www.codeproject.com/Articles/804584/Wixsharp-WixSharp-UI-Extensions
* SO
	* https://stackoverflow.com/questions/10090523/experiences-with-wix-wixsharp-compared-to-wix?lq=1
	* https://stackoverflow.com/questions/2898905/programmatically-building-an-msi/26242469#26242469

## Silent installs

Get inspiration from Chocolatey (https://github.com/chocolatey/choco) packages...
The Powershell scripts call into Chocolatey's `Install-ChocolateyPackage`/`Uninstall-ChocolateyPackage`:
* https://github.com/chocolatey/choco/blob/bfe351b7d10c798014efe4bfbb100b171db25099/src/chocolatey.resources/helpers/functions/Install-ChocolateyPackage.ps1
* https://github.com/chocolatey/choco/blob/6ba4f47360cb0324e0d5af4023b46c72165a3a5b/src/chocolatey.resources/helpers/functions/Uninstall-ChocolateyPackage.ps1


### MongoDB

* https://chocolatey.org/packages/mongodb -> https://chocolatey.org/packages/mongodb.install
	* https://github.com/dtgm/chocolatey-packages/tree/master/automatic/mongodb.install

### RabbitMQ + Erlang

* https://chocolatey.org/packages/rabbitmq
	* https://github.com/rabbitmq/chocolatey-package
	* https://github.com/tnwinc/chocolatey-rabbitmq
* https://chocolatey.org/packages?q=erlang
	* https://github.com/ElixirWin/ChocolateyPackages/tree/master/Erlang

Notes: 

There are some additional manual setup steps involved when installing Erlang + RabbitMQ on Windows (be sure to account for this is building a silent installer):

* Compatibility chart: https://www.rabbitmq.com/which-erlang.html
* These additional steps are described here: https://www.rabbitmq.com/cli.html
  
```
On Windows, the cookie location depends on a few factors:

Erlang 20.2 or later

With Erlang versions starting with 20.2, the cookie file locations are:

%HOMEDRIVE%%HOMEPATH%\.erlang.cookie (usually C:\Users\%USERNAME%\.erlang.cookie for user %USERNAME%) if both the HOMEDRIVE and HOMEPATH environment variables are set

%USERPROFILE%\.erlang.cookie (usually C:\Users\%USERNAME%\.erlang.cookie) if HOMEDRIVE and HOMEPATH are not both set

For the RabbitMQ Windows service - %USERPROFILE%\.erlang.cookie (usually C:\WINDOWS\system32\config\systemprofile)

If the Windows service is used, the cookie should be copied from C:\Windows\system32\config\systemprofile\.erlang.cookie to the expected location for users running commands like rabbitmqctl.bat.
```
