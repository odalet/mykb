# Zig

![Ziglang](https://ziglang.org/zig-logo-light.svg)

## Documentation, Videos

* Official Home: <https://ziglang.org/>
* [Tutorial](https://ziglearn.org/)
* [Zig News](https://zig.news/)
* Youtube
  * Third-party introduction/review video: <https://www.youtube.com/watch?v=ygfGO5n1Oe4>
  * [Zig SHOWTIME Channel](https://www.youtube.com/c/ZigSHOWTIME)
* Articles
  * [Understanding the Zig Programming Language](https://medium.com/swlh/zig-the-introduction-dcd173a86975)
  * Third-party notes on Zig: <https://ikrima.dev/dev-notes/zig/zig-build/>
  * [A series of 'Cool Zig patterns'](https://zig.news/xq/cool-zig-patterns-305o)
* About Zig's self-hosted compiler (landed in v0.10):
  * [Zig Is Self-Hosted Now, What's Next?](https://kristoff.it/blog/zig-self-hosted-now-what/)
  * [Zig's New Relationship with LLVM](https://kristoff.it/blog/zig-new-relationship-llvm/)

### `comptime`

* [What is Zig's Comptime?](https://kristoff.it/blog/what-is-zig-comptime/)
* Using `comptime` for Generic programming
  * [What Makes the Zig Programming Language Unique?](https://itnext.io/what-makes-zig-unique-1b98bfb95701)
  * [C++ vs Zig Template Based Programming](https://levelup.gitconnected.com/c-vs-zig-template-based-programming-d3e248885aa)
  * [Here's another example of the coolness of Zig's comptime code execution](https://news.ycombinator.com/item?id=26375172)

### Zig as a cross-compiler

* [zig cc: a Powerful Drop-In Replacement for GCC/Clang](https://andrewkelley.me/post/zig-cc-powerful-drop-in-replacement-gcc-clang.html)
* [Zig Makes Rust Cross-compilation Just Work](https://actually.fyi/posts/zig-makes-rust-cross-compilation-just-work/)
* [Zig Makes Go Cross Compilation Just Work](https://dev.to/kristoff/zig-makes-go-cross-compilation-just-work-29ho)
  * On Windows, stick to `x86_64-windows-gnu` (that is Zig's bundled MinGW):
    * <https://github.com/ziglang/zig/issues/7874>
    * <https://github.com/golang/go/issues/43886#issuecomment-766483975> 
* [Building SQLite with CGo for (almost) every OS](https://zig.news/kristoff/building-sqlite-with-cgo-for-every-os-4cic)
* [Maintain it With Zig](https://kristoff.it/blog/maintain-it-with-zig/)
* A concrete example: Redis
  * [Compile a C/C++ Project with Zig](https://zig.news/kristoff/compile-a-c-c-project-with-zig-368j)
  * [Cross-compile a C/C++ Project with Zig](https://zig.news/kristoff/cross-compile-a-c-c-project-with-zig-3599)
  * [Make Zig Your C/C++ Build System](https://zig.news/kristoff/make-zig-your-c-c-build-system-28g5)
  * [Extend a C/C++ Project with Zig](https://zig.news/kristoff/extend-a-c-c-project-with-zig-55di)
* On Windows: 

### Custom allocators

### Data Structures

#### AoS vs SoA

Array of Structures is usually how we want to reason about a list of related fields; however, for performance reasons (better locality) the data would benefit to be arranged as a Structure of Arrays...

Enter Zig's `MultiArrayList`: [Struct of Arrays (SoA) in Zig? Easy & in Userland!](https://zig.news/kristoff/struct-of-arrays-soa-in-zig-easy-in-userland-40m0)

### Debugging

* [How I setup zig on Windows](https://www.reddit.com/r/Zig/comments/hqjw0n/how_i_setup_zig_on_windows/?utm_source=share&utm_medium=web2x)
  * [zls](https://github.com/zigtools/zls), [zls VSCode extension](https://github.com/zigtools/zls-vscode)

### Packaging

> The packaging story for Zig is a WIP!

* [zpm](https://github.com/zigtools/zpm)

## Source code

* Zig language: <https://github.com/ziglang>
  * <https://github.com/ziglang/zig>
* Zig tools: <https://github.com/zigtools>
