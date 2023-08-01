# How-to

## Robert Nystrom's Crafting Interpreters

![Robert Nystrom's Crafting Interpreters](https://craftinginterpreters.com/image/header.png)

> A whole book that implements a (not so) simple interpreter in Java then in C: <https://craftinginterpreters.com/contents.html/>
>
> The language is dynamically-typed and garbage-collected. It supports:
>
> * Data Types: booleans, numbers, strings and nil
> * Arithmetic and comparison and logical operators
> * Control flow: `if`, `while`, `for`
> * Functions and Closures
> * Classes with constructor (`init()`), dynamic fields and single (non-virtual) inheritance
>
> The language comes in two different implementations:
>
> * Java-based 'Tree-walking' implementation that reiles on Java's GC for memory management. It's slow, but easy to implement and debug.
> * C implementation: this one adds a bytecode into which the is AST is compiled that gets executed on a VM. The VM provides its own GC.

* Implementations:
  * Official: <https://github.com/munificent/craftinginterpreters>
  * Lists:
    * <https://github.com/munificent/craftinginterpreters/wiki/Lox-implementations>
    * <https://github.com/topics/lox-language>
    * <https://github.com/topics/lox>
  * [Lox in Lox](https://github.com/benhoyt/loxlox) + [Associated article](https://benhoyt.com/writings/loxlox/)
* [Editor Support](https://github.com/munificent/craftinginterpreters/wiki/Editor-support)

## Immo Landwerth's Minsk

![terrajobst's minsk](https://opengraph.githubassets.com/cd800821aebeed1c151d33d8feaa134e151d60af7e2a2fac310213265a1c9d70/terrajobst/minsk)

> Tutorial Language by **Immo Landwerth** [GitHub](https://github.com/terrajobst), [Twitter](https://twitter.com/terrajobst)
>
> The language is incrementally live-coded on [Youtube](https://www.youtube.com/playlist?list=PLRAdsfhKI4OWNOSfS7EUu5GRAVmze1t2y). Each [episode](https://github.com/terrajobst/minsk/pulls?q=is%3Apr+is%3Aclosed+label%3Aepisode+sort%3Acreated-asc) is associated with a commit and notes.
>
> The language is strictly-typed. It compiles down to **MSIL**.

* Github: <https://github.com/terrajobst/minsk>
* Youtube Series: <https://www.youtube.com/playlist?list=PLRAdsfhKI4OWNOSfS7EUu5GRAVmze1t2y>

## C# + LLVM

* LLVM's Kaleidoscope in C#: [Kaleidoscope: Implementing a Language with LLVM in CSharp](https://ice1000.org/llvm-cs/en/)
* ClangSharp Nuget issue: <https://github.com/dotnet/ClangSharp/issues/118>

### Gota7 + Asylum Code

* Gota7 repos:
  * [Invoke LLVM to run bitcode, for easy executable distribution](https://github.com/Gota7/LLVM-Invoker)
  * Article: [How To Make A Programming Language](https://gota7.github.io/GotaGuide/ProgrammingLanguage/Index.html)
* Asylum Language: <https://github.com/Asylum-Lang-Foundation>
  * High-level wrapping of LLVM Sharp: [WARD-Sharp](https://github.com/Asylum-Lang-Foundation/WARD-Sharp)

----

## Articles, tutorials

* [I wrote a programming language. Here’s how you can, too](https://www.freecodecamp.org/news/the-programming-language-pipeline-91d3f449c919/)
* [What is a control-flow graph?](https://rustc-dev-guide.rust-lang.org/appendix/background.html#what-is-a-control-flow-graph)
* **Pretty Laughable Language**
  * <https://build-your-own.org/compiler/>
  * <https://github.com/byo-books/pretty_laughable_lang>
  * Implemented in python(in one unique file!), compiles down to x64 assembly that is either run from memory or saved to an Elf executable (although there must be issues as they only result in segmentation faults on my machine)
  * My own fork (with a C# implementation): <https://github.com/odalet/pretty_laughable_lang>
* **Pinecone**
  * <https://www.freecodecamp.org/news/the-programming-language-pipeline-91d3f449c919/>
  * <https://github.com/wmww/Pinecone>
* [Writing Your Own Toy Compiler Using Flex, Bison and LLVM](https://gnuu.org/2009/09/18/writing-your-own-toy-compiler/)
  * <https://github.com/lsegal/my_toy_compiler>
* GccTiny frontend: <https://github.com/rofirrim/gcc-tiny/tree/master/gcc/tiny>
* [Writing a Simple Programming Language from Scratch - Part 1](https://dev.to/evantypanski/writing-a-simple-programming-language-from-scratch-part-1-54a2)
  * <https://github.com/evantypanski/ectlang>
* [Writing your own programming language and compiler with Python](https://medium.com/@marcelogdeandrade/writing-your-own-programming-language-and-compiler-with-python-a468970ae6df)