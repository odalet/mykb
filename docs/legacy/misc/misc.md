# Misc

## Music

* Nyan Cat Music: <https://newscrewdriver.com/2018/11/06/hackaday-badge-nyan-cat-playing-the-music-and-animation/>
* Making sound in C#
  * <https://stackoverflow.com/questions/14042630/how-to-generate-sounds-according-to-frequency>
  * <https://social.msdn.microsoft.com/Forums/vstudio/en-US/08d52d56-91cc-40d6-ab44-5be868cd0cf9/sound-synthesis-with-c?forum=netfxbcl>
  * <https://channel9.msdn.com/coding4fun/articles/Generating-Sound-Waves-with-C-Wave-Oscillators>
  * `Console.Beep()`:

  ```csharp
  // Beep at 5000 Hz for 1 second
  Console.Beep(5000, 1000);
  ```

## Drawing things, Winforms, WPF

* [Cyotek blog](https://www.cyotek.com/blog/)
  * [Ant Simulator](https://github.com/cyotek/LangtonsAntSimulator)
* [C# Helper Blog](http://csharphelper.com/blog/)

## Emulation

* [Emulating a PlayStation 1 (PSX) entirely with C# and .NET](https://www.hanselman.com/blog/emulating-a-playstation-1-psx-entirely-with-c-and-net)

## Fractals

* [Play the Chaos Game to Understand WebAssembly Memory Management](https://blog.jeremylikness.com/blog/2019-04-22_play-the-chaos-game-to-understand-webassembly-memory-management/)

![ifs](https://blog.jeremylikness.com/blog/2019-04-22_play-the-chaos-game-to-understand-webassembly-memory-management/images/1.gif)

* [Distributed Fractal Image processing with Akka.Net Clustering and Docker](http://www.rickyterrell.com/?p=197)

![mandel](https://www.rickyterrell.com/wp-content/uploads/2019/12/Screen-Recording-2019-12-20-at-10.36.01-PM.gif)

## UX

### Microsoft FAST

* [Accessible Adaptive Design Systems with Microsoft's New FAST Framework](https://www.infoq.com/news/2020/08/microsoft-fast-design-system/)
  * <https://www.fast.design/>
  * [The Fluent Design System for Windows app creators](https://docs.microsoft.com/en-us/windows/apps/fluent-design-system)

* [Rounded controls in Windows](https://mspoweruser.com/microsoft-program-manager-asks-developers-to-implement-rounded-corners-in-ui-controls/)
  * <https://github.com/microsoft/microsoft-ui-xaml/issues/524>
  * <https://docs.microsoft.com/en-us/windows/uwp/design/style/reveal-focus>

![i](https://raw.githubusercontent.com/mrlacey/microsoft-ui-xaml-specs/RoundedCornerVisualizations/active/RoundedCorner/ImageFiles/Selectors.png)
![i](https://user-images.githubusercontent.com/7389110/57676863-66108a80-761d-11e9-9ff5-de6332ab2700.png)
![i](https://user-images.githubusercontent.com/7389110/57676978-ab34bc80-761d-11e9-8081-11a929cc3297.png)
![i](https://user-images.githubusercontent.com/7389110/57677134-11214400-761e-11e9-82a5-59607b315c91.png)
![i](https://user-images.githubusercontent.com/7389110/58507627-150aa580-818a-11e9-855e-f55acc1258b9.png)
![i](https://user-images.githubusercontent.com/7389110/58640978-2c64a280-82f2-11e9-812f-d8a40e944a7b.png)
![i](https://user-images.githubusercontent.com/7389110/58824474-0c0b4f80-8634-11e9-8927-edbb04fa6b62.png)
![i](https://user-images.githubusercontent.com/7389110/58822815-3c50ef00-8630-11e9-8cb2-ae2cc537373a.png)
![i](https://user-images.githubusercontent.com/7389110/58925355-241bc580-873f-11e9-9cd6-1dc13fe3f9c9.png)
![i](https://user-images.githubusercontent.com/7389110/59034037-1317a500-8862-11e9-8c17-8e3298a3491f.png)
![i](https://user-images.githubusercontent.com/7389110/59041318-42cda980-8870-11e9-92f4-b112355729ef.png)

* [(Part 1) Replicating Flight UI: Preparing the project to work with MVVM](https://askxammy.com/part-1-replicating-flight-ui-preparing-the-project-to-work-with-mvvm/)

![ui](https://cdn.dribbble.com/users/32512/screenshots/6776366/interface_flight_by_gleb3.png)

## Data URL Scheme

* <data:text/plain;charset=UTF-8;page=21,the%20data:1234,5678>

## Big Data

* [Introducing .NET for Apache® Spark™ Preview](https://devblogs.microsoft.com/dotnet/introducing-net-for-apache-spark/)

## AI

* [Bring Anomaly Detector on-premises with containers support](https://channel9.msdn.com/Shows/AI-Show/Bring-Anomaly-Detector-on-premise-with-containers-support)

## Scoop

* <https://scoop.sh/>

## Embedded scripting

* Why not use WebAssembly? <https://tirania.org/blog/archive/2020/Mar-02.html>
  * With **wasmer: <https://wasmer.io/>**

## License Sites

* LVLGO: <https://www.lvlgo.com/> (ex: <https://www.lvlgo.com/microsoft-office-2016-home-and-student-cd-key.html>)

## .NET on top of Java

* <https://github.com/spaceflint7/bluebonnet>

## Service Wrappers & multi-process

### Idées

* Stack technique (.NET) :
  * Warden: <https://github.com/warden-stack/Warden>
  * Topshelf: <http://topshelf-project.com/>
  * Serilog: <https://serilog.net/>
* Appli console "client"
  * un seul exe pour le client et le serveur console (voir le service via Topshelf)
  * utiliser des flags ou de la détection auto pour savoir si on se lance en mode serveur ou client
* Logging : Serilog? Connector?
* Monitoring:
  * API exposed by the server; can be consumed by:
    * Console client
    * Web app
    * HTTP API? Protobuf?
  * Based on Warden Web Panel?

### Native Service Wrappers (used by Java apps)

* Apache: <https://commons.apache.org/proper/commons-daemon/procrun.html> - Used by:
  * Artifactory,
  * Atlassian suite (cf. tomcat8.exe)
* Tanuki: <https://wrapper.tanukisoftware.com/doc/english/introduction.html> - Used by:
  * Sonarqube
  * Nexus
* Yajsw:
  * <http://yajsw.sourceforge.net/>
  * <https://github.com/cstroe/yajsw>

### .Net Service Wrappers

* Cloudbees (Jenkins): <https://github.com/kohsuke/winsw>
* Nginx: <https://github.com/daptiv/NginxService>

## Serialization

* <https://thrift.apache.org/>
* <http://www.eprosima.com/index.php/resources-all/performance/apache-thrift-vs-protocol-buffers-vs-fast-buffers>
* <https://stackoverflow.com/questions/69316/biggest-differences-of-thrift-vs-protocol-buffers>
* <https://stackoverflow.com/questions/7390561/zeromq-protocol-buffers>
  * <https://github.com/eishay/jvm-serializers/wiki>
  * <https://www.dotkam.com/2011/09/09/zeromq-and-google-protocol-buffers/>

## Low-level programming languages

### Rust

### Others

* C2: <http://c2lang.org/site/>
* Nim: <https://nim-lang.org/>
* Jai:
  * <https://inductive.no/jai/>
  * <https://github.com/BSVino/JaiPrimer/blob/master/JaiPrimer.md>
  * <http://www.mrphilgames.com/jai/>
* Rithie/Rix: <https://github.com/riolet/rix>

## CI / C++ / Linux

* [https://jenkins.io/blog/2017/07/07/jenkins-conan/](https://jenkins.io/blog/2017/07/07/jenkins-conan/)
* [http://nuclear.mutantstargoat.com/articles/make/#installing-libraries](http://nuclear.mutantstargoat.com/articles/make/#installing-libraries)
* [https://spin.atomicobject.com/2016/08/26/makefile-c-projects/](https://spin.atomicobject.com/2016/08/26/makefile-c-projects/)
* CMake
  * Using CMake to handle 3rd-party: <https://www.selectiveintellect.net/blog/2016/7/29/using-cmake-to-add-third-party-libraries-to-your-project-1>
  * <https://stackoverflow.com/questions/8153519/how-to-automatically-download-c-dependencies-in-a-cross-platform-way-cmake>
  * <https://www.guyrutenberg.com/2012/07/19/auto-detect-dependencies-when-building-debs-using-cmake/>
  * <https://stackoverflow.com/questions/41251474/how-to-import-zeromq-libraries-in-cmake>
  * <http://voices.canonical.com/jussi.pakkanen/2013/03/26/a-list-of-common-cmake-antipatterns/>
  * **<https://rix0r.nl/blog/2015/08/13/cmake-guide/>**
  * <http://cgold.readthedocs.io/en/latest/index.html>
* pkg-config: <https://en.wikipedia.org/wiki/Pkg-config>
* Hunter:
  * <https://github.com/ruslo/hunter>
  * <https://docs.hunter.sh/en/latest/packages.html>
  * <https://hackernoon.com/approaches-to-c-dependency-management-or-why-we-built-buckaroo-26049d4646e7>
  * <http://blog.conan.io/2016/03/30/are-c-and-c++-languages-ready-for-the-npm-debacle.html>
* <http://gazebosim.org/tutorials?tut=install_dependencies_from_source>
* In-source vs out-of-source builds:
  * <http://cgold.readthedocs.io/en/latest/tutorials/out-of-source.html>
  * <http://voices.canonical.com/jussi.pakkanen/2013/04/16/why-you-should-consider-using-separate-build-directories/>
* Other Links:
  * <https://www.reddit.com/r/cpp/comments/6nu39i/approaches_to_c_dependency_management_or_why_we/>
  * <https://medium.com/@sdboyer/so-you-want-to-write-a-package-manager-4ae9c17d9527>

## How to unit test memory leaks

* **dotMemory Unit**: <https://www.jetbrains.com/dotmemory/unit/>
* <https://stackoverflow.com/questions/3652028/unit-testing-memory-leaks>
* <https://stackoverflow.com/questions/578967/how-can-i-write-a-unit-test-to-determine-whether-an-object-can-be-garbage-collec>
* Keeping VS2017 Build Tools up-to-date: <https://alastaircrabtree.com/keeping-visual-studio-2017-build-tools-up-to-date/>

```text
dotMemoryUnit.exe "C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\Common7\IDE\CommonExtensions\Microsoft\TestWindow\vstest.console.exe" -- "C:\Users\odalet\Documents\Visual Studio 2017\Projects\ConsoleApp4\MemTests\bin\Debug\MemTests.dll" /InIsolation /Settings:"C:\Users\odalet\Documents\Visual Studio 2017\Projects\ConsoleApp4\x64.runsettings" /TestAdapterPath:C:\WORK\REPOSITORIES\addup-cameras\buildtools\MsTest\Adapter /logger:Console

dotMemory Unit 3.0 part of 2017.3  build 111.0.20171219.95427. Copyright (C) 2015-2017 JetBrains s.r.o.
Outil en ligne de commande d'exécution de tests Microsoft (R), version 15.5.0

Copyright (c) Microsoft Corporation. Tous droits réservés.

Démarrage de l'exécution de tests, patientez...

La série de tests utilise des DLL générées pour le framework .NETFramework,Version=v4.5 et la plateforme X64. Les DLL suivantes ne font pas partie de la série de tests :
MemTests.dll est généré pour le framework 4.6.2 et la plateforme X86.

Accédez à http://go.microsoft.com/fwlink/?LinkID=236877&clcid=0x409 pour plus de détails sur la gestion de ces paramètres.

Réussi(s) : Fake
...
```

**Tested from `C:\Users\odalet\Documents\Visual Studio 2017\Projects\ConsoleApp4\packages\JetBrains.dotMemoryUnit.3.0.20171219.105559\lib\tools`**

## Search engines

* Lucene.NET
* [LunrCore, a lightweight search library for .NET](https://weblogs.asp.net/bleroy/lunrcore?WT.mc_id=DX_MVP4025064)

## Misc misc

* Single-file C libraries: [https://github.com/nothings/stb](https://github.com/nothings/stb)
* **VS Build Tools: [https://alastaircrabtree.com/keeping-visual-studio-2017-build-tools-up-to-date/](https://alastaircrabtree.com/keeping-visual-studio-2017-build-tools-up-to-date/)**
* VSCode Extensions: [https://www.red-gate.com/simple-talk/dotnet/net-development/writing-vs-code-extensions-typescript](https://www.red-gate.com/simple-talk/dotnet/net-development/writing-vs-code-extensions-typescript)
* JS Charting Libs: [https://blog.logrocket.com/comparing-the-most-popular-javascript-charting-libraries-f76fbe59ffd0](https://blog.logrocket.com/comparing-the-most-popular-javascript-charting-libraries-f76fbe59ffd0)
* [Reading DOOM WAD Files](https://www.cyotek.com/blog/reading-doom-wad-files)
* [free-programming-books](https://ebookfoundation.github.io/free-programming-books/)
