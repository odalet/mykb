# .NET Standard / .NET Core

## .NET Core

### CoreRT

* <https://github.com/dotnet/corert>
* <https://medium.com/@MStrehovsky/fight-the-global-warming-compile-your-c-apps-ahead-of-time-9997e953645b>

* Fun:
  * <https://medium.com/@MStrehovsky/building-a-self-contained-game-in-c-under-8-kilobytes-74c3cf60ea04>
  * <https://twitter.com/MStrehovsky/status/1215331352352034818>

### .NET Core 3

* Single-file executables in .NET Core 3: <https://blog.magnusmontin.net/2019/09/22/single-file-exes-in-net-core/>
* VS2019 Support: <https://devblogs.microsoft.com/visualstudio/dot-net-core-support-in-visual-studio-2019-version-16-3/>
* Winforms Designer for .NET Core 3:
  * Hack: <https://www.codeproject.com/Articles/5163923/Use-Windows-Forms-Designer-on-NET-Core-3-0-Preview>
  * Extension (Preview): <https://aka.ms/winforms-designer>
* Porting desktop apps to .NET Core: <https://devblogs.microsoft.com/dotnet/porting-desktop-apps-to-net-core/>
* `System.IO.Pipelines`:
  * <https://blogs.msdn.microsoft.com/dotnet/2018/07/09/system-io-pipelines-high-performance-io-in-net/>
  * <https://itnext.io/use-system-io-pipelines-and-system-threading-channels-apis-to-boost-performance-832d7ab7c719>
* [.NET Core and systemd](https://devblogs.microsoft.com/dotnet/net-core-and-systemd/)
* [Building Microservices On .NET Core – Part 6 Real time server client communication with SignalR and RabbitMQ](https://altkomsoftware.pl/en/blog/building-microservices-6/)
* [How do I find which directory my .NET Core console application was started in or is running from?](https://www.hanselman.com/blog/HowDoIFindWhichDirectoryMyNETCoreConsoleApplicationWasStartedInOrIsRunningFrom.aspx)
* [Example of a simple .NET Core Console App](https://github.com/shawnwildermuth/pinger/blob/master/src/Options.cs)
  * And the accompanying article: <http://wildermuth.com/2020/08/02/NET-Core-Console-Apps---A-Better-Way>

### Single file deployments

* <https://www.hanselman.com/blog/MakingATinyNETCore30EntirelySelfcontainedSingleExecutable.aspx>

### Multi-targeting

* <https://www.cafe-encounter.net/p2312/multi-targetting-net-framework-and-net-core-in-a-single-project>

### .NET Core Native

* Calling C# natively from Rust: <https://medium.com/@chyyran/calling-c-natively-from-rust-1f92c506289d>

### Shared .NET Core framework

* SxS installs: <https://www.hanselman.com/blog/SideBySideUserScopedNETCoreInstallationsOnLinuxWithDotnetinstallsh.aspx>

* .NET Core 'primitives' series:
  * <https://natemcmaster.com/blog/2017/12/21/netcore-primitives/>
  * <https://natemcmaster.com/blog/2018/08/29/netcore-primitives-2/>

* Deep-dive into .NET Core primitives:
  * deps.json, runtimeconfig.json, and dll's: <https://natemcmaster.com/blog/2017/12/21/netcore-primitives/>
  * the shared framework: <https://natemcmaster.com/blog/2018/08/29/netcore-primitives-2/>
  * runtimeconfig.json in depth: <https://natemcmaster.com/blog/2019/01/09/netcore-primitives-3/>

## Hosting Console Background Services

* <https://jmezach.github.io/2017/10/29/having-fun-with-the-.net-core-generic-host/>
* <https://docs.microsoft.com/en-us/dotnet/standard/microservices-architecture/multi-container-microservice-net-applications/background-tasks-with-ihostedservice>
* **<https://blogs.msdn.microsoft.com/cesardelatorre/2017/11/18/implementing-background-tasks-in-microservices-with-ihostedservice-and-the-backgroundservice-class-net-core-2-x/>**
* **<https://docs.microsoft.com/en-us/aspnet/core/fundamentals/host/hosted-services?view=aspnetcore-2.1>**
* <https://thinkrethink.net/2018/08/02/hostbuilder-ihost-ihostedserice-console-application/>
* <https://thinkrethink.net/2018/02/21/asp-net-core-background-processing/>
* <https://garywoodfine.com/ihost-net-core-console-applications/>
* Scheduled: <https://thinkrethink.net/2018/05/31/run-scheduled-background-tasks-in-asp-net-core/>
* Scoped: <https://thinkrethink.net/2018/07/12/injecting-a-scoped-service-into-ihostedservice/>
* **Windows Service**:
  * <https://www.stevejgordon.co.uk/running-net-core-generic-host-applications-as-a-windows-service>
  * Ctrl+C / SIGTERM: <https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.hosting.hostinghostbuilderextensions.useconsolelifetime?view=aspnetcore-2.1>
* **Linux Service** (**init.d**, **systemd**):
  * <https://logankpaschke.com/linux/systemd/dotnet/systemd-dotnet-1/>
  * <https://developers.redhat.com/blog/2017/06/07/writing-a-linux-daemon-in-c/>
  * <http://pmcgrath.net/running-a-simple-dotnet-core-linux-daemon>

* **Support of systemd in .NET Core 3.0**:
  * <https://devblogs.microsoft.com/dotnet/net-core-and-systemd/>
  * <https://github.com/aspnet/Extensions/blob/master/src/Hosting/Systemd/src/SystemdHelpers.cs>

## Architecture

* <http://piotrgankiewicz.com/2018/07/05/net-core-microservices-dshop/>
* <http://piotrgankiewicz.com/2018/07/09/net-core-microservices-theory-dshop-solution-structure/>
* <http://piotrgankiewicz.com/2017/03/13/net-core-continuous-deployment-part-i-travis-ci-integration/>

## Build/Deployment

* Self-contained: <https://www.danielcrabtree.com/blog/496/net-core-self-contained-and-framework-dependent-deployments-explained>
* Multi-targetting: <https://nicksnettravels.builttoroam.com/post/2018/08/08/Speed-up-development-with-Multi-Targeted-Visual-Studio-Projects.aspx>
* <https://github.com/mholo65/depends>

### Reference Assemblies

* <https://oren.codes/2018/07/03/create-and-pack-reference-assemblies/>
* <https://oren.codes/2018/07/09/create-and-pack-reference-assemblies-made-easy/>
* <https://github.com/onovotny/MSBuildSdkExtras>

## Logging

### LoggerMessage

* <https://docs.microsoft.com/en-us/aspnet/core/fundamentals/logging/loggermessage?view=aspnetcore-2.1>
* <https://blogs.msdn.microsoft.com/fkaduk/2018/08/05/benchmarks-of-the-logging-with-loggermessage/>

## .NET Standard / .NET Core migrations

* <https://www.red-gate.com/simple-talk/blogs/first-experience-migrating-net-app-core/>
* <http://www.lhotka.net/weblog/MigratingFromNETToNETStandard.aspx>
