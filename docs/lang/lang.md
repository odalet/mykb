# Programming languages

## Native / Low level

### [V](https://vlang.io/)

**Simple, fast, safe, compiled. For developing maintainable software**

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

### [Crystal](https://crystal-lang.org/)

* Ruby-like, statically type checked, built-in type inference
* C-bindings
* Null representation: union between the type and nil

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

### [Odin](https://odin-lang.org/)

**Odin is a general-purpose programming language with distinct typing built for high performance, modern systems and data-oriented programming. Odin is the C alternative for the Joy of Programming**

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

### [Beef](https://www.beeflang.org/)

**Performance-oriented compiled language built hand-in-hand with its IDE environment**

* C#-like, but compiles to native
* Comes with a Graphical IDE (Windows-only for now):
* Article on Beef: <https://devm.io/csharp/beef-programming-166540>
* Beef IDE:

  ![beef-ide](https://s3.eu-west-1.amazonaws.com/redsys-prod/articles/ac2bf509466cdf3fe724347d/images/screenshot0.gif)

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

### [Kit](https://www.kitlang.org/)

**A magical, high performance programming language for game development**

* Kit has a strong, static type system to catch errors at compile-time.
* Kit is a procedural language, not object-oriented or functional; however, traits, boxes and abstracts can simulate object-oriented interfaces and polymorphism.
* Kit compiles to standard C, which then compiles to native libraries or executables.
* Memory management in Kit is manual (no automatic garbage collection), with some convenience features to make this easier.

```js
include "stdio.h";

function main() {
    var s: CString = "Hello from Kit!";
    printf("%s\n", s);
}
```

### [Ooc](http://ooc-lang.org/)

**Ooc is a small programming language with a clear and concise syntax that compiles to C99**

```c
parse: func {
    PropReader new(path, props)

    // parse deps
    requires := props get("Requires")
    if (requires) {
        deps addAll(requires split(',', false) map (|dep| dep trim(" \t")))
    }
}
```

### [C3](https://c3-lang.org/)

* C3 is a system programming language based on C. It is an evolution of C enabling the same paradigms and retaining the same syntax as far as possible.
* C3 started as an extension of the [C2 language](http://www.c2lang.org/) by [Bas van den Berg](https://github.com/bvdberg). It has evolved significantly, not just in syntax but also in regard to error handling, macros, generics and strings.
* The C3 compiler can be found on github: <https://github.com/c3lang/c3c>.

Example:

```c
module hello_world;
import std::io;

fn int main(String[] argv) 
{
    io::println("Hello World!");
    return 0;
}
```

Building c3 on Ubuntu 22.04:

```sh
wget -O - https://apt.llvm.org/llvm-snapshot.gpg.key|sudo apt-key add -
sudo add-apt-repository -y "deb http://apt.llvm.org/jammy/ llvm-toolchain-jammy-15 main"
sudo apt update
apt list --upgradable
sudo apt upgrade
sudo apt-get install clang-15 zlib1g zlib1g-dev libllvm15 llvm-15 llvm-15-dev llvm-15-runtime   > liblld-15-dev liblld-15
sudo apt-get install -y libpolly-17-dev

git clone https://github.com/c3lang/c3c.git
cd c3c
mkdir build
cd build
cmake ..
cmake --build .
./c3c compile ../resources/examples/hash.c3
```

## With VM / Interpreted / GC / Higher level

### [Nim](https://nim-lang.org/)

**statically typed compiled systems programming language**

It combines successful concepts from mature languages like Python, Ada and Modula.

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

### [Pony](https://www.ponylang.io/)

**Open-source, object-oriented, actor-model, capabilities-secure, high-performance programming language**

```pony
actor Main
  new create(env: Env) =>
    env.out.print("Hello, world!")
```

### [Cyber](https://cyberscript.dev/)

**Cyber is a new language for fast, efficient, and concurrent scripting**

* Written in **zig**: <https://github.com/fubark/cyber>
  * Targets:
  * Linux x64 (Ubuntu, Fedora, Arch)
  * MacOS x64
  * MacOS arm64 (Manually tested.)
  * Windows x64
  * WASM Web
  * WASM WASI (soon)

```python
import m 'math'

worlds = ['World', '世界', 'दुनिया']
worlds.append(m.random())
for worlds each w:
    print 'Hello, {w}!'

func fib(n int) int:
    coyield
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

count = 0    -- Counts iterations.
fiber = coinit fib(30)
while fiber.status() != #done:
    res = coresume fiber
    count += 1
print '{res} {count}'
```

## Pet projects / Experiments / R&D

* Microsoft Research
  * [Bosque](https://github.com/BosqueLanguage/BosqueCore) - Syntax and types of TypeScript and the semantics of ML and Node/JavaScript
    * <https://www.microsoft.com/en-us/research/project/bosque-programming-language/>
    * Previous GitHub repo: <https://github.com/Microsoft/BosqueLanguage>
  * [Koka](https://koka-lang.github.io/koka/doc/index.html) - Strongly typed functional-style language with effect types and handlers
    * <https://www.microsoft.com/en-us/research/project/koka/>
    * <https://github.com/koka-lang/koka>
    * <https://www.rise4fun.com/koka/tutorial>
    * See also [Eff](http://math.andrej.com/wp-content/uploads/2012/03/eff.pdf) (Non-MS)
  * [P](https://github.com/p-org/P) - Language for asynchronous event-driven programming and the IoT
    * <https://en.wikipedia.org/wiki/P_(programming_language)>
* Minsk: <https://github.com/terrajobst/minsk>
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
* [Peregrine](https://github.com/peregrine-lang/Peregrine) - Peregrine is a Compiled, Systems Programming Language, currently under development.
  * Initially implemented in V; seems to have been rewritten in C++
* Micro language (math expr parser with .NET API support):
  * <https://www.codeproject.com/Articles/1108939/MAGES-Ultimate-Scripting-for-NET>
  * <https://github.com/FlorianRappl/Mages>
  * <https://github.com/FlorianRappl/YAMP>
