# API Documentation Tools & Diagrams as Code

## Diagraming

**<https://www.thoughtworks.com/radar/techniques/diagrams-as-code>**

* [Diagrams](https://diagrams.mingrammer.com/)
* [Structurizr](https://structurizr.com/dsl)
* [Asciidoctor Diagrams](https://docs.asciidoctor.org/diagram-extension/latest/)
* [WebSequenceDiagrams](https://www.websequencediagrams.com/)
* [PlantUML](https://plantuml.com/en/)
* [Graphviz](https://graphviz.org/)

### Markdown diagraming

* <https://support.typora.io/Draw-Diagrams-With-Markdown/> // Editor _beta_
  * <https://bramp.github.io/js-sequence-diagrams/>
  * <http://flowchart.js.org/>
* **Mermaid**: <https://mermaidjs.github.io/>
  * [Markdown Plus](https://mdp.tylingsoft.com/) - Markdown editor with extra features
  * [gitbook-plugin](https://github.com/JozoVilcek/gitbook-plugin-mermaid)
    * <https://github.com/GitbookIO/gitbook>
    * <https://legacy.gitbook.com/editor>  
  * [Confluence plugin](https://marketplace.atlassian.com/apps/1214124/mermaid-plugin-for-confluence?hosting=server&tab=overview)
  * [Using mermaid via docpad](http://nauvalatmaja.com/2015/01/13/rendering-mermaid-in-docpad/)
  * [Using mermaid in Jekyll](https://rubygems.org/gems/jekyll-mermaid/versions/1.0.0)
  * [Using mermaid via Octopress](http://mostlyblather.com/blog/2015/05/23/mermaid-jekyll-octopress/)
  * [Using mermaid via Gatsby](https://github.com/konsumer/gatsby-remark-graph)
    * <https://www.gatsbyjs.org/>
  * [Mardown editor Haroopad](http://pad.haroopress.com/user.html) // Editor _beta_
  * [Sphinx extension](https://github.com/mgaitan/sphinxcontrib-mermaid) // Python
  * [Pandoc filter](https://github.com/raghur/mermaid-filter)
    * <https://pandoc.org/>
  * [hads](https://github.com/sinedied/hads)
  * [Mermaid Preview for VS Code](https://marketplace.visualstudio.com/items?itemName=vstirbu.vscode-mermaid-preview) // Editor
  * [Package for Sublime Text 3](https://packagecontrol.io/packages/Mermaid) // Editor

## Wyam (.NET)

<https://wyam.io/>

## Gatsby (JS)

<https://www.gatsbyjs.org/>

* gate template: <https://github.com/sarasate/gate> (JS)
  * <https://gatejs.netlify.com/>

## Slate (JS, Ruby)

<https://github.com/lord/slate>, <https://github.com/lord/slate>

* <https://lord.github.io/slate/#introduction>
* Versioning: <https://github.com/lord/slate/issues/479>, <https://github.com/lord/slate/issues/138> --> Open Issue :(
  * Example (with hacky versioning): <http://lfex.github.io/lhc/current/>
* 2-column layout?
  * <https://docs.dwolla.com/#introduction>
  * <https://developers.wia.io/v1.0/reference#rest-api-generate-an-access-token>
  * <https://switchpayments.com/docs/client-lib.html>
  * flex.io
    * <https://www.flex.io/docs/examples>
    * <https://www.flex.io/docs/api/rest>
    * <https://www.flex.io/docs/api/javascript>
    * SRC: <https://github.com/flexiodata/flexio-docs>
  * Aglio: <https://github.com/danielgtaylor/aglio>
* Themes
  * <https://developer.tradegecko.com/docs.html?shell#>
* Forks
  * <https://github.com/pnerger/dpSlate>
  * Node.JS (<https://github.com/lord/slate/wiki/Slate-Related-Tools>)
    * ~~<https://github.com/sdelements/node-slate> (Full JS)~~
    * Shins: <https://github.com/mermade/shins>

## Docbox (JS)

<https://github.com/tmcw/docbox>

* Example: <http://project-osrm.org/docs/v5.10.0/api/#general-options>

### Docbox Tests

* multi-lang: ok
* automatic layout from file-system: doable, but work to do...
* 2-column layout?
* versions: ?

## Docusaurus (JS)

<https://docusaurus.io/>, <https://github.com/facebook/docusaurus>

* Multi-Language: OK (<https://docusaurus.io/docs/en/doc-markdown#language-specific-code-tabs>)
* Versioning: OK (<https://docusaurus.io/docs/en/versioning>)
  * Though kluncky (not all files are versioned, only the different ones... no Git integration...)
* Local Search: <https://github.com/facebook/Docusaurus/issues/776>
* V2: <https://github.com/facebook/Docusaurus/pull/1058>
* Help:
  * <https://luctst.github.io/docusaurus-starter-pack/docs/sidebar.html>

### Docusaurus Tests

* Adaptation of **BuckleScript** Doc Site: <https://github.com/BuckleScript/bucklescript.github.io>
  * multi-lang: tweaked _website\static\css\custom.css_, _website\static\js\toggleSyntaxButton.js_
* New site from scratch

## Metalsmith (JS)

<https://metalsmith.io/>, <https://github.com/segmentio/metalsmith>

* Awesome Metalsmith: <https://github.com/metalsmith/awesome-metalsmith>
  * yeoman generator: <https://github.com/hariadi/generator-metalsmith>
  * blue-system-group template: <https://github.com/blue-systems-group/www>
  * Example (Kuzzle API): <https://docs.kuzzle.io/api/1/essentials/connecting-to-kuzzle/>
  * Boilerplates: <https://github.com/doubleshow/metalsmith-boilerplates>
  * Base templates (gulp): <https://github.com/evocode/metalsmith-base>

## Docsify (JS)

<https://docsify.js.org/#/>

* Awesome Docsify: <https://github.com/docsifyjs/awesome-docsify>
* Versioning? Multi-language?

## Docute (JS)

<https://github.com/egoist/docute>, <https://docute.org/>

* No generation step: rendered on the fly
* Markdown + Vue
* No Search, Partials or Includes?
* Versioning based on branches: <https://docute.org/guide/customization#versioning>
* Plugins <https://github.com/egoist/docute-plugins>
  * Mermaid: <https://github.com/egoist/docute-plugins/tree/master/packages/mermaid>
  * Katex (maths): <https://github.com/egoist/docute-plugins/tree/master/packages/katex>
* Example (Zeit Now site seems to be built with Docute, and has search support): <https://zeit.co/docs/v2/getting-started/installation>
  * Source Code (in React/Next.js + MDX): <https://github.com/zeit/docs>

## Draw.io Export

* <https://github.com/jgraph/drawio/issues/150>
  * <https://gist.github.com/wknapik/d4c3c662cbc79d2739725b34e088f545>
  * <https://github.com/languitar/drawio-batch/issues/9>

## Git based wikis

* <https://paulhammant.com/2017/09/23/wikis-that-use-source-control-for-their-backing-store/>
* <https://www.perforce.com/blog/comparison-of-git-powered-wikis-in-cloud-based-scm-tools>
* <https://blog.ably.io/hacking-github-to-build-your-own-wiki-ab08aab58db1>

### wiki.js (JS, Vue)

<https://github.com/Requarks/wiki>, <https://wiki.js.org/>

### Gollum (Ruby, JS)

<https://github.com/gollum/gollum>

### realms wiki (Python, JS)

<https://github.com/scragg0x/realms-wiki>, ~~<https://realms.io/> (Error 502)~~

## Other Tools

* Awesome List: <https://github.com/myles/awesome-static-generators#documentation>
* Read the Docs (Python, JS: <https://github.com/rtfd/readthedocs.org>)
  * Supports Sphinx, rST, Git...
* Nicedoc: <https://nicedoc.io/>, <https://github.com/IBM/nicedoc.io>
  * Example: <https://nicedoc.io/cheeriojs/cheerio>
* ~~DocPad: <https://docpad.org/> (JS, Coffee) -> Too generalist...~~
* ~~<http://www.sphinx-doc.org/en/master/> (Python)~~
* <https://www.mkdocs.org/> (Python)
  * Versioning Example (thanks to ReadTheDoc: this is injected...): <https://osquery.readthedocs.io/en/stable/>
* ~~<https://apiblueprint.org/>~~
* ~~<https://dotnet.github.io/docfx/>~~

## Misc

* Running node in production: <http://pm2.keymetrics.io/> (grabbed from <https://github.com/Matterwiki/Matterwiki>)
* Markdown Lorem Ipsum: <https://jaspervdj.be/lorem-markdownum/>
* Syntax: <https://daringfireball.net/projects/markdown/syntax>

## Asciidoc

* <http://www.cirosantilli.com/markdown-style-guide/#use-asciidoc>
* Diagramming:
  * <https://asciidoctor.org/docs/asciidoctor-diagram/>
* Antora: <https://antora.org/> (JS)
  * Showcase: <https://docs.antora.org/antora/2.0/install/install-antora/>
  * Insert an image: <https://docs.antora.org/antora/2.0/asciidoc/insert-image/>
  * Link with Asciidoctor extensions:
    * <https://gitlab.com/antora/antora-asciidoctor-extensions>
    * <https://gitlab.com/antora/antora/issues/138>
    * <https://github.com/markushedvall/plantuml-encoder>
    * <https://medium.com/@yfuruyama/real-world-plantuml-7365ffc1b6e6>
    * <http://plantuml.com/>
    * <https://github.com/asciidoctor/asciidoctor-diagram/issues/183>
    * <https://puravida-software.gitlab.io/asciidiagram/>
    * <https://gitlab.com/puravida-software/asciidiagram>
* AsciiBinder <http://asciibinder.org/> (Ruby / JRuby)
  * Superseeded by Antora
* Example of a huge adoc: <https://github.com/cirosantilli/linux-kernel-module-cheat/blob/v3.0/README.adoc>
* Asciidoc doc: <http://www.methods.co.nz/asciidoc/userguide.html>

----

## Inspiration

* Ably
  * Lang selection: <https://www.ably.io/documentation/mqtt>, <https://www.ably.io/documentation/quick-start-guide>
  * Version selection: <https://www.ably.io/documentation/realtime>
  * Source (in [Textile](https://textile-lang.com/)): <https://github.com/ably/docs>
    * Master branch published here: <https://docs.ably.io/>
* Stripe API: <https://stripe.com/docs/api>
* <https://www.staticgen.com/>
  * <https://github.com/lord/slate/wiki/Slate-in-the-Wild>
  * <https://docs.dwolla.com/#create-a-document-for-a-customer>
  * <https://github.com/pnerger/dpSlate>
  * <https://github.com/X1011/git-directory-deploy>
  * <https://github.com/dojo/dapi/wiki>
  * <https://dojotoolkit.org/api/>
  * <https://github.com/facebook/Docusaurus/issues/789>
  * **<https://facebook.github.io/react-native/docs/getting-started>**
  * **<https://bucklescript.github.io/docs/en/interop-overview>**
    * <https://github.com/BuckleScript/bucklescript.github.io>
  * **<https://segment.com/blog/building-technical-documentation-with-metalsmith/>**

----

Tests

* Metalsmith
  * Added <https://github.com/mayo/metalsmith-serve>
  * Added <https://www.npmjs.com/package/metalsmith-watch>
  * bof...

<!-- 

Accessing raw files in Bitbucket

https://fmas-ul01.fmas.local:7993/projects/SFT/repos/machinecontrol/raw/build.cmd?at=refs%2Fheads%2Fmaster
https://fmas-ul01.fmas.local:7993/projects/SFT/repos/machinecontrol/raw/build.cmd?at=refs%2Fheads%2Ffeature%2FSPI54_Outil_Estimation_MultiLaser
https://fmas-ul01.fmas.local:7993/projects/SFT/repos/machinecontrol/raw/src/ncore-server/version.txt?at=refs%2Fheads%2Fmaster

https://%SERVER%:%PORT%/projects/%PROJECT%/repos/%REPO%/raw/%PATH%?at=%REF%

-->