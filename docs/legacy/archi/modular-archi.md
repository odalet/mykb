# Modular Architecture & Micro-Services

## General

* Fowler's [Patterns of Distributed Systems](https://martinfowler.com/articles/patterns-of-distributed-systems/index.html)
  * [Unsynchronized Clocks and Ordering Events](https://martinfowler.com/articles/patterns-of-distributed-systems/index.html#UnsynchronizedClocksAndOrderingEvents)
  * [Generation Clock](https://martinfowler.com/articles/patterns-of-distributed-systems/generation.html)

## Onion/Clean/Hexa Architecture

* [Common Web Application Architectures](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures)

![_Clean Architecture Layers_](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/media/image5-8.png)

![_Declined with ASP.NET Core_](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/media/image5-9.png)

* [The Onion Architecture : part 1](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/)
  * **The database is not the center. It is external.**
  * **The big difference is that any outer layer can directly call any inner layer.**
  * Infrastructure is pushed out to the edges where no business logic code couples to it.
  * The code that interacts with the database will implement interfaces in the application core.
  * Sample app: <https://bitbucket.org/jeffreypalermo/onion-architecture/src/default/>

| Traditional | Onion |
|-------------|-------|
| ![Traditional](https://i0.wp.com/jeffreypalermo.com/wp-content/uploads/2018/06/image257b0257d255b61255d1.png?resize=357%2C253&ssl=1) | ![Onion](https://i0.wp.com/jeffreypalermo.com/wp-content/uploads/2018/06/image257b0257d255b59255d.png?resize=366%2C259&ssl=1) |

_Different views of the same arch (example app is [CodeCamp Server](https://github.com/cstrahan/codecampserver)):_

| Flattened | Layered |
|-----------|-------|
![flattened](https://i2.wp.com/jeffreypalermo.com/wp-content/uploads/2018/07/theonionarchitecturepart3_67c4image07.png?resize=376%2C240&ssl=1) | ![onion](https://i1.wp.com/jeffreypalermo.com/wp-content/uploads/2018/07/theonionarchitecturepart3_67c4image05.png?resize=376%2C263&ssl=1)

* Others views on Onion arch
  * <https://ayende.com/blog/3464/onion-architecture> 

* The Clean Architecture variant (aiming at synthesizing other similar architectures, onion, hexagonal...)

![clean](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

* Hexagonal Architecture
  * [Blog Octo (fr)](https://blog.octo.com/architecture-hexagonale-trois-principes-et-un-exemple-dimplementation/)

![octo1](https://blog.octo.com/wp-content/uploads/2018/07/archi_hexa_00.png)
![octo2](https://blog.octo.com/wp-content/uploads/2018/07/archi_hexa_02.png)

**Tout dépend du Domain, le Domain ne dépend de rien.**

_Ports and adapters_

![octo3](https://blog.octo.com/wp-content/uploads/2018/07/archi_hexa_05.png)
![octo4](https://blog.octo.com/wp-content/uploads/2018/07/archi_hexa_06.png)

> Une organisation à éviter est de regrouper les classes par types.
> Par exemple le répertoire des “ports”, ou le répertoire des “repositories” (si vous utilisez ce pattern), ou le répertoire des “services”.
> Pensez 100 % métier dans votre code métier, y compris pour l’organisation de vos modules ou répertoires !
> L’idéal est de pouvoir ouvrir un répertoire ou un module de la logique métier et de comprendre tout de suite les problèmes métier que votre programme résout ; plutôt que de ne voir que des répertoires “repositories”, “services”, ou autre “managers”.

* To Read: <https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/>

![full](https://docs.google.com/drawings/d/e/2PACX-1vQ5ps72uaZcEJzwnJbPhzUfEeBbN6CJ04j7hl2i3K2HHatNcsoyG2tgX2vnrN5xxDKLp5Jm5bzzmZdv/pub?w=960&h=657)

----

## TODO

* Simplifier la paire Module/Definition --> Tout dans Definition
* Simplifier le fx de validation ?
  * Moins fonctionnel, plus procédural
* Revoir les interfaces d'exposition des résultats de validation
  * Done: moins d'interfaces ; on renvoie directement des `ValidationRule<string>`

## RPC with gRpc

* Hashicorp has developped a golang/gRpc based plugin framework. It is open-sourced here: <https://github.com/hashicorp/go-plugin>
  * Example interop with python plugin: <https://github.com/hashicorp/go-plugin/blob/master/examples/grpc/plugin-python/plugin.py>
  * Protocol negotiation: <https://docs.hashicorp.com/sentinel/internals/plugins>
  * Messages definition: <https://github.com/hashicorp/sentinel-sdk/blob/master/proto/import.proto>
  * Broker? <https://github.com/hashicorp/go-plugin/blob/master/grpc_broker.proto>
  * Multiplexing?

## Threading

* Limiting concurrent threads: <http://markheath.net/post/constraining-concurrent-threads-csharp>

## Micro-services

### Misc

* Powershell Micro-service with Docker: <https://dfinke.github.io/powershell,%20docker,%20pode/2020/08/01/PowerShell-Microservice-Hello-World.html> / See also:
  * <https://github.com/dfinke/PowerShellMicroservice/blob/master/dockerPipeline.build.ps1>
  * <https://github.com/Badgerati/Pode>

### Patterns

* Polly (circuit breaker and the likes...): <https://github.com/App-vNext/Polly>
  * <https://github.com/App-vNext/Polly/wiki/Circuit-Breaker>
  * <https://github.com/App-vNext/Polly/wiki/Bulkhead>

### Microservices with C# and RabbitMQ

* <https://insidethecpu.com/2015/05/22/microservices-with-c-and-rabbitmq/>
* <https://insidethecpu.com/2015/07/17/microservices-in-c-part-1-building-and-testing/>
* <https://insidethecpu.com/2015/07/31/microservices-in-c-part-2-consistent-message-delivery/>

## Process Management

* <https://softwarerecs.stackexchange.com/questions/18860/c-library-for-windows-process-management>
  * <https://archive.codeplex.com/?p=psinterop>
  * <http://www.crawler-lib.net/child-processes>
  * <https://archive.codeplex.com/?p=wolfpack>
  * <https://stackoverflow.com/questions/3740256/process-management-in-net>
    * Job Objects: <https://msdn.microsoft.com/en-us/library/ms684161.aspx>
  * <https://stackoverflow.com/questions/15528015/what-is-the-difference-between-a-saga-a-process-manager-and-a-document-based-ap>
* <https://stackoverflow.com/questions/8153358/management-running-process>
* <https://social.msdn.microsoft.com/Forums/vstudio/en-US/4f8ac9a7-1c80-4294-8d8e-8e233bf8c521/c-console-app-to-monitor-a-process-and-its-cpu?forum=csharpgeneral>
* <https://inov8.wordpress.com/2010/08/29/c-asp-net-creating-an-asynchronous-threaded-worker-process-manager-and-updatepanel-progress-monitor-control/>
* <https://www.romaniancoder.com/pmonitor/>
  * <https://github.com/dangeabunea/PMonitor>
  * <http://www.dotnetframework.org/default.aspx/WCF/WCF/3@5@30729@1/untmp/Orcas/SP/ndp/cdf/src/WCF/infocard/Service/managed/Microsoft/InfoCards/ProcessMonitor@cs/1/ProcessMonitor@cs>

## Messaging

* retlang: <https://github.com/Hades32/retlang>
* fibrous: <https://github.com/chrisa23/Fibrous>
* Rx: <http://reactivex.io/>

## Process-based Architecture

* Brighter: <https://github.com/BrighterCommand/Brighter>

## Command-line

* How is it possible to run Wordpad by just typing its name even though it isn’t on the PATH? <https://blogs.msdn.microsoft.com/oldnewthing/20110725-00/?p=10073/>
* Retrieve executables from Path on Windows:
  * <https://stackoverflow.com/questions/3855956/check-if-an-executable-exists-in-the-windows-path>
  * <https://docs.microsoft.com/en-us/windows/desktop/api/shlwapi/nf-shlwapi-pathfindonpatha>
    * <https://www.pinvoke.net/default.aspx/shlwapi.PathFindOnPath>
    * <https://github.com/dahall/Vanara/blob/master/PInvoke/ShlwApi/ShlwApi.PathXX.cs#L518>
* Linux:
  * Which source code: <https://sources.debian.org/src/debianutils/4.8.6/which/>

## ServiceStack

* Home: <https://servicestack.net/>
* Doc: <http://docs.servicestack.net/>
* GitHub: <https://github.com/ServiceStack>
* RabbitMQ:
  * Doc: <http://docs.servicestack.net/rabbit-mq>
  * Setup: <https://github.com/ServiceStack/rabbitmq-windows>
  * <https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.Server.Tests/Messaging/MqServerIntroTests.cs>
  * <https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.Common.Tests/Messaging/MqServerAppHostTests.cs>
  * <https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.Common.Tests/Messaging/RabbitMqTests.cs>

## Actor frameworks

* <https://arxiv.org/abs/1505.07368>
  * <https://actor-framework.org/pdf/chs-rapc-16.pdf>

### Microsoft Orleans

### Microsoft Service Fabric

### Akka

### Akka.NET

### proto.actor

* <http://proto.actor/>
* C++ port (very very early stage...): <https://github.com/whitglint/protoactor-cpp>
* Uses gRPC; X-platform: .NET, Java, Go
* Similar to Orleans (virtual actors: Grains)

### CAF

* <http://actor-framework.org/>
* <https://actor-framework.readthedocs.io/en/stable/>
* <https://github.com/actor-framework/actor-framework>
* <http://matthias.vallentin.net/slides/caf-rise.pdf>

### Interop

* CAF: NO <https://groups.google.com/forum/#!topic/actor-framework/-SsSiLdTico>
* Akka Artery (Experimental, UDP): <https://doc.akka.io/docs/akka/2.4/scala/remoting-artery.html>
  * Based on Aeron (UDP *cast Java lib with Java/C++/.NET clients) : <https://github.com/real-logic/Aeron>
* <https://github.com/AsynkronIT/protoactor-go/issues/35>

### Plugins

* [Introducing Plugin Framework 1.0.0 – Plugins for .NET apps including Blazor and ASP.NET Core with built-in support for Nuget](https://mikaelkoskinen.net/post/plugin-framework-dotnet-core-blazor-nuget-roslyn)