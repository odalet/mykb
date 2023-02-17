# Markdown

- [Markdown](#markdown)
  - [Site Generators](#site-generators)
  - [Diagraming](#diagraming)
    - [Mermaid](#mermaid)
    - [Diagrams.net (previously Draw.io)](#diagramsnet-previously-drawio)
    - [Excalidraw](#excalidraw)
  - [Misc](#misc)
    - [Embed colors](#embed-colors)
    - [ToC](#toc)

## Site Generators

* [mdBook](https://rust-lang.github.io/mdBook/index.html). This seems to allow for many things, thanks to its huge ecosystem of plugins:
  * **mdBook** is what's used to generate Rust Documentation and books
  * Searchable HTML documentation
  * MD to MD Generation
  * Support for Mermaid and many more
  * PDF output
  * ...

## Diagraming

### Mermaid

DSL-based

* Documentation: [Mermaid.js](https://mermaid-js.github.io/mermaid/#/)
* Online Editor: <https://mermaid.live/>

> More and more Markdown editors/renderers have now support for embedded Mermaid diagrams!
>
> Example Mermaid diagram (VSCode's Markdown preview shows the diagram instead of the code)
>
> ```mermaid
> graph TD
>     A[Christmas] -->|Get money| B(Go shopping)
>     B --> C{Let me think}
>     C -->|One| D[Laptop]
>     C -->|Two| E[iPhone]
>     C -->|Three| F[fa:fa-car Car]
> ```

### Diagrams.net (previously Draw.io)

<https://app.diagrams.net/>

>Can export PNG images that embed the diagram XML definition in the image metadata.

### Excalidraw

<https://excalidraw.com/>

> This one has a _hand-drawn_ look n'feel.

## Misc

### Embed colors

* See <https://stackoverflow.com/questions/35465557/how-to-apply-color-on-text-in-markdown>

### ToC

* Here is a sum up of the support of ToC generation with various MD engines: <https://alexharv074.github.io/2018/08/28/auto-generating-markdown-tables-of-contents.html>

* Oddly enough, it seems that my VSCode keeps the ToC up to date once it detects one; I don't if this works in stock VSCode or of this came with an extension (*markdownlint*?).
  * Well, I found the *Create Table of Contents* action in the *Markdown All in One* extension!
* In order to generate the initial ToC, I used <https://ecotrust-canada.github.io/markdown-toc/>
