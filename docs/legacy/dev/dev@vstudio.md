# Visual Studio

## Extensions

* Multiple Solution Explorer Tools
  * <https://marketplace.visualstudio.com/items?itemName=misaz.multiplesolutionexplorertools>
  * <https://www.davidyardy.com/blog/multiple-solution-explorer-tools–visual-studio-extension/>
* VSX Blog: <http://www.visualstudioextensibility.com/>
* WSL Debugging
  * VSCode: <https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl>
  * VS: <https://marketplace.visualstudio.com/items?itemName=ms-azuretools.Dot-Net-Core-Debugging-With-Wsl2>

## Extensibility

* Sample VS Extensions: <https://github.com/microsoft/VSSDK-Extensibility-Samples>
* Tutorial Series: <https://michaelscodingspot.com/visual-studio-2017-extension-development-tutorial-part-1/>
  * Github: <https://github.com/michaelscodingspot/CodyDocs>
* Using Nuget packages: <https://devblogs.microsoft.com/visualstudio/simplify-extension-development-with-packagereference-and-the-vssdk-meta-package/>
* <https://brianlagunas.com/adding-solution-folders-and-moving-projects-with-a-custom-iwizard/>

### Language & Editor Extensions

* Textmate Grammar sample: <https://github.com/Microsoft/VSSDK-Extensibility-Samples/tree/master/TextmateGrammar>
* NodeJS Tools for VS2017 (see Jade support): <https://github.com/microsoft/nodejstools/blob/master/Nodejs/Product/Nodejs/Jade/Classifier/JadeClassifier.cs>
* Antlr Extension: <https://github.com/kaby76/AntlrVSIX>
* Plenty of languages: <https://github.com/tunnelvisionlabs/LangSvcV2>
* Colors:
  * Background Color Fix: <https://marketplace.visualstudio.com/items?itemName=NoahRichards.BackgroundColorFix>
  * Alternating Line Colors: <https://marketplace.visualstudio.com/items?itemName=sjnaughton.AlternatingLineColor>
    * <https://github.com/sjnaughton/alternating-line-color-visual-studio-extension>
  * Updates: 
    * https://github.com/Epsilekt/T4Editor/issues/2
    * <https://github.com/jpozo20/SharpLizer/blob/master/SharpLizer/Classification/TextViewColorizer.cs>
  * Theme detection:
    * <https://stackoverflow.com/questions/15920572/how-to-get-current-used-color-theme-of-visual-studio>
* Mads Kristensen's extensions
  * Syntax Highlighting Pack: <https://github.com/madskristensen/TextmateBundleInstaller>
* Roslyn-based:
  * <https://github.com/hicknhack-software/semantic-colorizer>
  * <https://github.com/tomasr/viasfora>
  * <https://github.com/tomasr/roslyn-colorizer/blob/master/RoslynColorizer/RoslynColorizer.cs>
* <https://docs.microsoft.com/en-us/visualstudio/extensibility/getting-started-with-language-service-and-editor-extensions?view=vs-2017>
* <https://docs.microsoft.com/en-us/visualstudio/extensibility/creating-an-extension-with-an-editor-item-template?view=vs-2017>

### Experimental Instances

* <https://stackoverflow.com/questions/54958880/resetting-experimental-instance-of-visual-studio>
* <https://stackoverflow.com/questions/45724449/unable-to-start-debugging-a-vs2017-vsix-project>

```shell
> %appdata%\Microsoft\VisualStudio\15.0_909a0d75Exp\ActivityLog.xml
> %appdata%\Roaming\Microsoft\VisualStudio\16.0_52bd62b5Exp\ActivityLog.xml

> %localappdata%\Microsoft\VisualStudio\15.0_909a0d75Exp

> cd "C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\VSSDK\VisualStudioIntegration\Tools\Bin\"
> CreateExpInstance /Reset /VSInstance=15.0_909a0d75 /RootSuffix=Exp
```

### Projects and Items Templates

* <https://docs.microsoft.com/en-us/visualstudio/ide/how-to-locate-and-organize-project-and-item-templates?view=vs-2017>
* VS 2019 Tags: <https://devblogs.microsoft.com/visualstudio/build-visual-studio-templates-with-tags-for-efficient-user-search-and-grouping/>
* Project System: <https://github.com/microsoft/VSProjectSystem>

### VSIX

* Update: <https://docs.microsoft.com/en-us/visualstudio/extensibility/how-to-update-a-visual-studio-extension?view=vs-2017>
* Deploying **vstemplate** via **vsix**:
  * <https://docs.microsoft.com/en-us/visualstudio/extensibility/getting-started-with-the-vsix-project-template?view=vs-2017>
  * <https://www.dotnetcurry.com/visualstudio/1243/create-project-template-visual-studio-2013-2015>
  * Using TemplateBuilder: <https://blogs.endjin.com/2014/07/a-step-by-step-guide-to-developing-visual-studio-item-templates-using-sidewaffle/>
  * Example VSIX full of templates: <https://github.com/LigerShark/side-waffle>

* Misc
  * Create solutions and projects from C#: * **Nager.TemplateBuilder** (<https://github.com/tinohager/Nager.TemplateBuilder>)
  * Experimental instance settings: **%LOCALAPPDATA%\Microsoft\VisualStudio**

### Distributing VSIX

* Simple local Gallery (Windows Service via Topshelf):
  * <https://blog.sverrirs.com/2017/05/vs-selfhosted-extension-gallery.html>
  * <https://github.com/sverrirs/vsgallery>
* Atom Generator: <https://github.com/garrettpauls/VSGallery.AtomGenerator>
* Private Gallery blog: <https://devblogs.microsoft.com/visualstudio/create-a-private-gallery-for-self-hosted-visual-studio-extensions/>
  * PrivateGalleryCreator: <https://github.com/madskristensen/PrivateGalleryCreator>
  * Open VSIX Gallery: <http://vsixgallery.com/>
    * <https://github.com/madskristensen/ExtensionGallery>

## C++

* C++ with VS 2019 and Windows Subsystem for Linux (WSL): <https://devblogs.microsoft.com/cppblog/c-with-visual-studio-2019-and-windows-subsystem-for-linux-wsl/>

