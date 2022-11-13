# .NET Tools, Tips n' Tricks

## .NET 5/6

* [Improvements in native code interop in .NET 5.0](https://devblogs.microsoft.com/dotnet/improvements-in-native-code-interop-in-net-5-0/)
  * <https://github.com/dotnet/runtime/issues/40484>
* [Breaking Change: .NET Docker Repo Name Change](https://github.com/dotnet/dotnet-docker/issues/2375)
  * [.NET Runtime](https://hub.docker.com/_/microsoft-dotnet-runtime/)
* [GitHub & Azure DevOps Microsoft-Hosted agents](https://github.com/actions/virtual-environments/issues/1891)
  > Please consider using of actions/setup-net-core-sdk action for GitHub Actions or Use .NET Core task for Azure Pipelines to specify the needed .NET version.
  * [Setup .NET Core SDK GitHub Action](https://github.com/marketplace/actions/setup-net-core-sdk)
  * [Use .NET Core task (DevOps)](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/tool/dotnet-core-tool-installer?view=azure-devops)
  * [Sample Docker image](https://github.com/dotnet/dotnet-docker/blob/244804c9b8/samples/dotnetapp/README.md)
  * [Upgrading our .NET Core 3.1 project to .NET 5](https://samlearnsazure.blog/2020/10/02/upgrading-our-net-core-3-1-project-to-net-5/)
  * **[.NET 5 Breaking Changes](https://blog.miguelbernard.com/net-5-the-breaking-changes-you-need-to-know-about/)**

### Multi-platform, SDK detection, Interop, and more

* [The Road to Cross-Platform Setup & Bootstrapping in .NET](https://ithrowexceptions.com/2020/07/01/road-to-cross-platform-setup-and-bootstrapping-in-dotnet.html)
* C++ Interop
  * <https://github.com/microsoft/clangsharp> -> <https://github.com/microsoft/ClangSharp/tree/master/sources/ClangSharpPInvokeGenerator>
  * **<https://github.com/mono/CppSharp>**
    * Used by QtSharp, MonoGame, LLDBSharp, Xamarin...
  * <http://www.swig.org/>
* [SO: Cross platform C++ in C# .net Core/5 application](https://stackoverflow.com/questions/65968143/cross-platform-c-in-c-sharp-net-core-5-application)
  * <https://github.com/xanatos/CSharpCPlusPlusInteropSamples>
* CLANG/CMake in VS:
  * <https://docs.microsoft.com/en-us/cpp/build/clang-support-msbuild?view=msvc-170>
  * <https://docs.microsoft.com/en-us/cpp/build/cmake-projects-in-visual-studio?view=msvc-170>
  * <https://docs.microsoft.com/en-us/cpp/linux/cmake-linux-project?view=msvc-170>
  * <https://docs.microsoft.com/en-us/cpp/build/get-started-linux-cmake?view=msvc-170>
* Porting C++/CLI to .NET Core - Example:
  * <https://devblogs.microsoft.com/cppblog/porting-a-c-cli-project-to-net-core/>
    * <https://github.com/mjrousos/CppCliMigrationSample>
* SLN Handling
  * [slngen](https://microsoft.github.io/slngen/)
* CMake/WSL Support in VS
  * <https://devblogs.microsoft.com/cppblog/build-and-debug-c-with-wsl-2-distributions-and-visual-studio-2022/>
* Example multi-platform libs
  * <https://github.com/ryancheung/FreeTypeSharp/blob/main/FreeTypeSharp/FreeTypeSharp.csproj>
  * <https://github.com/freetype/freetype>
  * <https://github.com/bulletphysics/bullet3.git> (used by VS Tutorial [here](https://docs.microsoft.com/en-us/cpp/build/get-started-linux-cmake?view=msvc-170))
* How to install latest clang:
  * Linux
    * use this? <https://apt.llvm.org/>
  * Windows
    * go to <https://github.com/llvm/llvm-project/releases/tag/llvmorg-13.0.0>
    * download & execute <https://github.com/llvm/llvm-project/releases/download/llvmorg-13.0.0/LLVM-13.0.0-win64.exe>
    * Add to the system path for all users! (into C:\Program Files\LLVM)

## SDK Style & .NET CLI

* [Adding AssemblyMetadataAttribute using new SDK project, with MSBuild](https://stu.dev/adding-assemblymetadataattribute-using-new-sdk-project-with-msbuild/)
* [Creating Custom .NET Project Types with .NET CLI Project Templates](https://weblog.west-wind.com/posts/2020/Oct/05/Creating-a-dotnet-new-Project-Template)

## Services

* [dotnet new worker - Windows Services or Linux systemd services in .NET Core](https://www.hanselman.com/blog/dotnet-new-worker-windows-services-or-linux-systemd-services-in-net-core)

## UI Frameworks

* [Avalonia](https://avaloniaui.net/)
* [SpaceVIL](https://www.codeproject.com/Articles/5257813/SpaceVIL-Framework-Cross-Platform-GUI-with-NET-JVM) (.NET, .NET Core, JVM)
  * <https://www.spvessel.com/>
  * <https://github.com/spvessel/spacevil>
* [Ooui](https://github.com/praeclarum/Ooui)
* [Comet](https://github.com/Clancey/Comet)
* Uno
  * [Beyond Uno Platform “Getting Started” – Navigation, Platform Specific XAML and C#, MVVM, JavaScript interop and more](https://platform.uno/blog/beyond-uno-platform-getting-started-navigation-platform-specific-xaml-and-c-mvvm-javascript-interop-and-more/)
* Cross-platform toolkits: <https://grbd.github.io/posts/2016/01/28/gtksharp-part-1-cross-platform-toolkits/>

### QT Sharp

* <https://www.mono-project.com/community/google-summer-of-code/reports/2017/cppsharp-dimitar-dobrev/>

### GtkSharp

* Old Gtk2 wrapper:
  * <https://github.com/mono/gtk-sharp>
  * <https://www.mono-project.com/docs/gui/gtksharp/>
* New Gtk3 wrapper:
  * <https://github.com/GtkSharp/GtkSharp>
  * Gtk 4 support: <https://github.com/GtkSharp/GtkSharp/issues/166>
* Example apps:
  * Banshee: <https://gitlab.gnome.org/Archive/banshee>
  * Smuxi: <https://github.com/meebey/smuxi>
  * Monodevelop: <https://github.com/mono/monodevelop>
  * Tomboy: <https://github.com/tomboy-notes/tomboy>

### Avalonia

> See [here](../dev/dev%40gui%40avalonia)

### UI Tricks

* [How to use CancellationToken With ICommand - A Solid Implementation of ICommand](https://medium.com/@csharpwriter/how-to-use-canellationtoken-with-icommand-a-solid-implementation-of-icommand-ea562a4d3281)

## Code Generation

### IQueryable & Expressions

* **[Look Behind the IQueryable Curtain](https://blog.jeremylikness.com/blog/look-behind-the-iqueryable-curtain/)**
* [Dynamically Build LINQ Expressions](https://blog.jeremylikness.com/blog/dynamically-build-linq-expressions/)

### Generating Reference Assemblies

* <https://blog.jetbrains.com/dotnet/2020/08/05/generate-reference-assemblies-with-refasmer/>

### Roslyn-based

* <https://gunnarpeipman.com/using-roslyn-to-build-object-to-object-mapper/>

## Threading / Async / Parallelism

* [Async anti-patterns](https://markheath.net/post/async-antipatterns)
* [I took Stack Overflow offline, again](https://blog.marcgravell.com/2019/02/fun-with-spiral-of-death.html)
* [A better ThreadLocal&lt;T&gt;](https://ayende.com/blog/189793-A/the-design-and-implementation-of-a-better-threadlocal-t)
* [Unmanaged Thread Utils](https://github.com/ptupitsyn/UnmanagedThreadUtils)
* [C# : TASK PARALLEL LIBRARY (TPL) WITH ASYNC AWAIT AND TASKCOMPLETIONSOURCE FOR ASYNC I/O OPERATIONS](http://www.techblogcity.com/2019/06/05/task-parallel-library-with-async-await-and-taskcompletionsource/)
* [Enforcing asynchronous code good practices using a Roslyn analyzer](https://www.meziantou.net/enforcing-asynchronous-code-good-practices-using-a-roslyn-analyzer.htm)
* [Asyncify a method and event response](https://inthehand.com/2020/10/05/asyncify-method-event/)
* `System.Threading.Channels`: _At a high-level, it provides a modern, optimised asynchronous API for in-process publisher/subscriber patterns._
  * Steve Gordon's [An introduction to System.Threading.Channels](https://www.stevejgordon.co.uk/an-introduction-to-system-threading-channels)
  * Stephen Toub's [An Introduction to System.Threading.Channels](https://devblogs.microsoft.com/dotnet/an-introduction-to-system-threading-channels/)

## Performance, .NET internals

* Everything in this post: [http://mattwarren.org/2018/06/15/Tools-for-Exploring-.NET-Internals/](http://mattwarren.org/2018/06/15/Tools-for-Exploring-.NET-Internals/)
* Olivier Coanet: <https://medium.com/@ocoanet>
  * <https://medium.com/@ocoanet/benchmarking-adventures-part-1-avoiding-boxing-fc7756385ffb>
  * struct + generic trick (perfs): <https://medium.com/@ocoanet/testing-without-mocking-5f1fddebc02b>
    * <https://www.youtube.com/watch?v=7GTpwgsmHgU>
    * <https://github.com/ravendb/ravendb/blob/a26c2277612692a0324509dd76df62349314c704/src/Sparrow/Sorter.cs>

## Michael's Coding Spot

* 7 Debugging Techniques for when your .NET application Freezes (hangs): <https://michaelscodingspot.com/7-debugging-techniques-for-when-your-net-application-freezes-hangs/>
* **Job Queues Series**:
  * Part 1: <https://michaelscodingspot.com/c-job-queues/>
  * Part 2: <https://michaelscodingspot.com/c-job-queues-with-reactive-extensions-and-channels/>
  * Part 3: <https://michaelscodingspot.com/c-job-queues-part-3-with-tpl-dataflow-and-failure-handling/>
  * Perf: <https://michaelscodingspot.com/performance-of-producer-consumer/>
* **Pipelines Series**:
  * Part 1: <https://michaelscodingspot.com/pipeline-pattern-implementations-csharp/>
  * Part 2: <https://michaelscodingspot.com/pipeline-pattern-tpl-dataflow/>
  * Part 3: <https://michaelscodingspot.com/pipeline-implementations-csharp-3/>

## CLI

* [DragonFruit and System.CommandLine is a new way to think about .NET Console apps](https://www.hanselman.com/blog/DragonFruitAndSystemCommandLineIsANewWayToThinkAboutNETConsoleApps.aspx)

## Tips

* <https://blog.mzikmund.com/2020/03/how-to-create-a-blank-solution-without-a-folder/>
* [Debugging .NET Builds with the MSBuild Structured Log Viewer](https://odetocode.com/blogs/scott/archive/2019/03/05/debugging-net-builds-with-the-msbuild-structured-log-viewer.aspx)
* [Empty try with finally](https://www.tabsoverspaces.com/233786-empty-try-with-finally?utm_source=feed)
* [Dynamic loading of native code with .NET](https://ericsink.com/entries/native_library.html)
* [Making my first contribution on SourceForge using Mercurial](https://andrewlock.net/making-my-first-contribution-on-sourceforge-using-mercurial/) (note: the part concerning Hg and Sourceforge is not that interesting, but the beginning of the post is)
* Async/await analyzers: <https://cezarypiatek.github.io/post/async-analyzers-summary/>

### Libs

* [Sasa](https://higherlogics.com/dev/sasa/api/index.html)