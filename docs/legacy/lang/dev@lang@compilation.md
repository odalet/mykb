# Compilation

## Resources

### Blogs

* Joe Duffy's blog:
  * Midori: <http://joeduffyblog.com/2015/11/03/blogging-about-midori/>

* Paranoid Coding
  * [Exploring borrowed annotations in C#](https://blog.paranoidcoding.com/2019/12/02/borrowing.html)

### Books

* ~~[Crafting Interpreters](https://craftinginterpreters.com/)~~
  * Wayback Machine:
    * <https://web.archive.org/web/*/https://craftinginterpreters.com/>
    * <https://web.archive.org/web/20220424045616/https://craftinginterpreters.com/sample.pdf>
  * Other works by the author:
    * <https://web.archive.org/web/20220611091546/http://gameprogrammingpatterns.com/sample.pdf>

### Scholar

* [Increasing the scope and resolution of Interprocedural Static Single Assignment](https://llvm.org/pubs/2009-08-SAS-IPSSA.pdf)

#### Type Inference

* Gradual Typing + inference
  * **mono- vs bi-directional type inference (Hindley-Milner): <https://eli.thegreenplace.net/2018/type-inference/>**
    * Unification Algorithm: <https://eli.thegreenplace.net/2018/unification/>
  * <https://en.wikipedia.org/wiki/Gradual_typing>
  * <https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system>
  * <http://www.cs.cmu.edu/~aldrich/FOOL/fool08/siek-slides.pdf>
  * <https://www.cs.umd.edu/~avik/projects/iogti/paper.pdf>
  * <https://www.irif.fr/~gc/papers/popl19.pdf>
  * <http://ecee.colorado.edu/~siek/dls08igtlc.pdf>
  * <https://www.researchgate.net/publication/330153340_Dynamic_type_inference_for_gradual_Hindley-Milner_typing/fulltext/5c30159f92851c22a35b342d/Dynamic-type-inference-for-gradual-Hindley-Milner-typing.pdf>

* Lexing
  * Compiler Design (Lexical analysis): <https://www.tutorialspoint.com/compiler_design/compiler_design_lexical_analysis.htm>
  * Compiler Construction/Lexical analysis: <https://en.wikibooks.org/wiki/Compiler_Construction/Lexical_analysis>

### Wikipedia

* <https://en.wikipedia.org/wiki/Operator-precedence_parser>
* <https://en.wikipedia.org/wiki/Shunting-yard_algorithm>  

## Code / sample languages

### C

* [chibicc: A Small C Compiler](https://github.com/rui314/chibicc)
  * [An Incremental Approach to Compiler Construction](http://scheme2006.cs.uchicago.edu/11-ghuloum.pdf)
  * <https://github.com/rui314/8cc>
* [tcc](https://bellard.org/tcc/)
* [lcc](https://github.com/drh/lcc)
  * Companion book: <https://drh.github.io/lcc/>

### XSharp

* <https://www.x-sharp.net/>
* <https://github.com/CosmosOS/XSharp>

![XSharp VS Integration](https://www.x-sharp.net/wp-content/uploads/2018/01/XSharpVS2-1024x637.png)

### Minsk

* Github: <https://github.com/terrajobst/minsk>
* Youtube Series: <https://www.youtube.com/playlist?list=PLRAdsfhKI4OWNOSfS7EUu5GRAVmze1t2y>

### Go

* Toolchain: <https://dave.cheney.net/tag/toolchain>
* <https://go.googlesource.com/go/+refs>
* <https://go.googlesource.com/go/+/refs/heads/master/src>
* <https://go.googlesource.com/go/+/refs/tags/weekly.2009-11-06/src/cmd/gc/walk.c>

### Cflat (Wayback machine)

* <https://web.archive.org/web/2005*/http://iti.spbu.ru/eng/grants/Cflat.asp>
* <https://web.archive.org/web/20051003220405/http://iti.spbu.ru/eng/grants/Cflat.asp>  

### Pony

* <https://github.com/ponylang/ponyc>
  * <https://www.ponylang.io/learn/>
  * <https://www.ponylang.io/discover/>
  * <https://playground.ponylang.io/>

### Stark

* <https://github.com/stark-lang/stark>
  * <https://xoofx.com/blog/2020/03/06/stark-language-frontend-compiler/>
  * <https://xoofx.com/blog/2020/03/05/stark-melody-dotnet-sel4/>

### C++ based Lexer/Parser (VS Magazine)

* <https://visualstudiomagazine.com/articles/2014/05/01/how-to-write-your-own-compiler-part-1.aspx>

### JS

* [JInt: Javascript Interpreter for .NET](https://github.com/sebastienros/jint)
* JS + Wasm: <https://www.courier.com/blog/build-a-webassembly-language-lexing/>
  * <https://github.com/drew-y/wispy>

## Misc Tricks

* **TextReader** to **IEnumerable**: <http://blog.einbu.no/2009/03/parsing-textfiles-with-linq/>

## Cross-compilation

* toolchains: [https://toolchains.bootlin.com/](https://toolchains.bootlin.com/)

## Backend

### SSA

* <https://en.wikipedia.org/wiki/Static_single_assignment_form>
* [Understanding static single assignment forms](https://blog.yossarian.net/2020/10/23/Understanding-static-single-assignment-forms)
* [Methods to implement a register-based IR in static single assignment form](https://stackoverflow.com/questions/8657557/methods-to-implement-a-register-based-ir-in-static-single-assignment-form)
* [SSA in Scheme](https://www.cs.umd.edu/class/fall2017/cmsc430/slides/SSA.pdf)
* [Translating Out of Static Single Assignment Form](https://graal.ens-lyon.fr/~pkchouha/presentation/ssa/ssaf.pdf)

### LLVM

* <http://llvm.org/docs/LangRef.html>
* <https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/index.html>
* [Mapping High Level Constructs to LLVM IR](https://mapping-high-level-constructs-to-llvm-ir.readthedocs.io/en/latest/README.html)

### IL

* [Codeproject: Building a simple .NET Compiler](https://www.codeproject.com/Articles/1227239/Building-a-Simple-NET-Compiler)
* [Compiler Construction: With C# and DotNet Intermediate Language](https://www.cl.cam.ac.uk/teaching/0910/CompConstr/NEJ/)
* LCC: <https://sites.google.com/site/lccretargetablecompiler/>
