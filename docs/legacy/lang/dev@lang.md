# Languages

## Misc information

* <https://akr.am/languages/>
  * Example: ![Ceylon -> C](/images/ceylon-to-c.png)
* DSL Syllabus: <https://github.com/jeanqasaur/dsl-syllabus-fall-2016/blob/master/README.md>
* <https://tomassetti.me/resources-create-programming-languages/>
* Lists (awesome-like) of programming languages:
  * <https://opensourcelibs.com/libs/programming-languages>
  * <https://awesomeopensource.com/projects/programming-language>
  * **<http://aalhour.com/awesome-compilers/#compilers-and-interpreters>**
* Eric Lippert: <https://ericlippert.com/2018/10/31/anti-unification-part-2/> (then go back back back...)
* Mikhail Barash: <https://medium.com/@mikhail.barash.mikbar>
  * ABC of Kotlin: <https://medium.com/@mikhail.barash.mikbar/an-abc-of-kotlin-62b1867df8c2>
  * ABC of Jetbrain's MPS: <https://medium.com/@mikhail.barash.mikbar/abc-of-jetbrains-mps-33bed30c330b>
  * A tale about domain-specific languages: <https://medium.com/@mikhail.barash.mikbar/a-tale-about-domain-specific-languages-bde2ace22f6c>
  * Looking at code through the prism of JetBrains MPS: <https://medium.com/@mikhail.barash.mikbar/looking-at-code-through-the-prism-of-jetbrains-mps-8e9b70e3257d>
  * Papers on programming languages: ideas from 70's for today: <https://medium.com/@mikhail.barash.mikbar/papers-on-programming-languages-ideas-from-70s-for-today-2931891d4dbd>
  * Language Wheel?�?language engineering for everyone: <https://medium.com/@mikhail.barash.mikbar/language-wheel-language-engineering-for-everyone-8a2a55e23a45>
    * <http://www.metaborg.org/en/latest/>
    * <https://www.eclipse.org/Xtext/>
    * MPS <https://www.jetbrains.com/mps/>
      * <http://mbeddr.com/index.html>
      * <https://www.jetbrains.com/youtrack/specials/youtrack.html>

## Oracle GraalVM

* <https://blogs.oracle.com/developers/announcing-graalvm>
* <http://www.graalvm.org/docs/graalvm-as-a-platform/>
* <https://github.com/oracle/graal>
* <https://github.com/oracle/graal/blob/master/truffle/docs/Languages.md>

## Lesser-known languages worth looking at

### Microsoft Researh

* [Bosque](https://github.com/Microsoft/BosqueLanguage)
* [Koka](https://www.microsoft.com/en-us/research/project/koka/)
  * <https://github.com/koka-lang/koka>
  * <https://www.rise4fun.com/koka/tutorial>
  * See also [Eff](http://math.andrej.com/wp-content/uploads/2012/03/eff.pdf) (Non-MS)
* [P](https://github.com/p-org/P)

### [Crystal](https://crystal-lang.org/)

* Ruby-like, statically type checked, built-in type inference
* C-bindings
* Null representation: union between the type and nil

Example:

```ruby
if rand(2) > 0
  my_string = "hello world"
end

puts my_string.upcase
```

gives:

```sh
$ crystal hello_world.cr
Error in hello_world.cr:5: undefined method 'upcase' for Nil (compile-time type is (String | Nil))

puts my_string.upcase
```

### [Nim](https://nim-lang.org/) - statically typed compiled systems programming language

> It combines successful concepts from mature languages like Python, Ada and Modula.

* Python-like
* Inspiration from Ada and modula
* Modern type system with local type inference, tuples, generics and sum types.
* Nim's memory management is deterministic and customizable with destructors and move semantics, inspired by C++ and Rust.

```nim
import strformat

type
  Person = object
    name: string
    age: Natural # Ensures the age is positive

let people = [
  Person(name: "John", age: 45),
  Person(name: "Kate", age: 30)
]

for person in people:
  # Type-safe string interpolation,
  # evaluated at compile time.
  echo(fmt"{person.name} is {person.age} years old")
```

### [Zig](https://ziglang.org/) - general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software

* [GitHub: Zig](https://github.com/ziglang/zig)

```zig
const std = @import("std");
const json = std.json;
const payload =
    \\{
    \\    "vals": {
    \\        "testing": 1,
    \\        "production": 42
    \\    },
    \\    "uptime": 9999
    \\}
;
const Config = struct {
    vals: struct { testing: u8, production: u8 },
    uptime: u64,
};
const config = x: {
    var stream = json.TokenStream.init(payload);
    const res = json.parse(Config, &stream, .{});
    // Assert no error can occur since we are
    // parsing this JSON at comptime!
    break :x res catch unreachable;
};
pub fn main() !void {
    if (config.vals.production > 50) {
        @compileError("only up to 50 supported");
    }
    std.log.info("up={d}", .{config.uptime});
}
```

### [V](https://vlang.io/) - Simple, fast, safe, compiled. For developing maintainable software.

* Go-like

```v
fn main() {
    areas := ['game', 'web', 'tools', 'science', 'systems',
              'embedded', 'drivers', 'GUI', 'mobile']
    for area in areas {
        println('Hello, $area developers!')
    }
}
```

### [Beef](https://www.beeflang.org/) - performance-oriented compiled language built hand-in-hand with its IDE environment

* C#-like, but compiles to native
* Comes with a Graphical IDE (Windows-only for now)

```csharp
using System;

namespace Hello {
    class Program {
        static void Main() {
            Console.WriteLine("Hello, world!");
        }
    }
}
```

### [Odin](https://odin-lang.org/) - The C alternative for the joy of programming

> general-purpose programming language with distinct typing, built for high performance, modern systems, and built-in data-oriented data types.

```odin
package main

import "core:fmt"

main :: proc() {
  program := "+ + * 😃 - /"
  accumulator := 0  
  for token in program {
    switch token {
    case '+': accumulator += 1
    case '-': accumulator -= 1
    case '*': accumulator *= 2
    case '/': accumulator /= 2
    case '😃': accumulator *= accumulator
    case: // Ignore everything else
    }
  } 
  fmt.printf("The program \"%s\" calculates the value %d\n",
             program, accumulator)
}
```

### [Kit](https://www.kitlang.org/) - A magical, high performance programming language for game development

```kit
include "stdio.h";

function main() {
    var s: CString = "Hello from Kit!";
    printf("%s\n", s);
}
```

### Other ones (toy & small languages)

* [Aki](https://github.com/syegulalp/Akilang) - a compiler for a simple language, built with Python 3.6+ and the LLVM framework by way of the llvmlite library
  * Windows-only
* [AMaCC](https://github.com/jserv/amacc) - Arguably Minimalist Arm C Compiler
* [C4](https://github.com/rswier/c4) - C in 4 functions
  * _seems to_ interpret a minimalist IR compiled from the input c code
* [Charly](https://github.com/KCreate/charly-vm)
* [EasyLang](https://github.com/erhanbaris/EasyLang)
* [The Super Tiny Compiler](https://github.com/jamiebuilds/the-super-tiny-compiler) - in JS, lots of comments
* [Tiny C](http://www.iro.umontreal.ca/~felipe/IFT2030-Automne2002/Complements/tinyc.c)
* [Simple MSIL Compiler](https://github.com/bencz/Simple-MSIL-Compiler) - C -> IL
* [Wren](https://github.com/wren-lang/wren)
* Micro language (math expr parser with .NET API support):
  * <https://www.codeproject.com/Articles/1108939/MAGES-Ultimate-Scripting-for-NET>
  * <https://github.com/FlorianRappl/Mages>
  * <https://github.com/FlorianRappl/YAMP>
