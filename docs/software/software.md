# Software

## Executable Compiler Detection

* [Exeinfo PE by ASL](https://github.com/ExeinfoASL/ASL): this one was the best I could find for Windows PE files (it detected that some exe had been built by zig); however it doesn't say much about ELF.
* [Detect it Easy](https://github.com/horsicq/Detect-It-Easy): a very good one, handles ELF, however did not detect my zig-compiled executable. Still valuable
* [Language 2000](https://farrokhi.net/language/): works on Windows, but as its name implies does not give much information for anything built in the 21st century...
* [PEiD](https://www.aldeid.com/wiki/PEiD): couldn't test because it has SentinelOne pop many threat alerts...

## Confluence / Draw.io

* Retrieve Draw.io diagrams in Confluence: <https://desk.draw.io/support/solutions/articles/16000066579-how-to-resolve-getting-404-errors-for-draw-io-macros-in-confluence-cloud->

## Retro / Legacy

### Turbo Vision implementations

The original framework from Borland: <https://en.wikipedia.org/wiki/Turbo_Vision>

* HTML/CSS Styling: <https://tomer.github.io/tvision/>
  * <https://github.com/tomer/tvision/>
* Multi-platform modern reimplementation: <https://github.com/magiblot/tvision>

  ![tvision](https://user-images.githubusercontent.com/20713561/81506401-4fffdd80-92f6-11ea-8826-ee42612eb82a.png)
  * And a text editor based on it: <https://github.com/magiblot/turbo>
  
  ![turbo](https://user-images.githubusercontent.com/20713561/89552632-b7053380-d80c-11ea-92e0-a8c30f80cd49.png)

## Security / Hacking

* Flare-on Challenge 9 Solutions: <https://www.mandiant.com/resources/blog/flareon9-challenge-solutions>
  * Challenge #8 is all about .NET injection: <https://www.mandiant.com/sites/default/files/2022-11/08-backdoor.pdf>
    * Related post here: <https://daniao.ws/dumping-x86-assembly-of-csharp-dynamicmethod.html>
* Harmony Lib: [A library for patching, replacing and decorating
.NET and Mono methods during runtime.](https://github.com/pardeike/Harmony)

## Misc

### Wezterm

A Rust-based Terminal Emulator:

* Website: <https://wezfurlong.org/wezterm/index.html>
* GitHub: <https://github.com/wez/wezterm/blob/main/color-types/src/lib.rs>

![Wezterm](https://wezfurlong.org/wezterm/screenshots/two.png)

However, more interstingly, its source code is a treasure trove:

* Color Types: <https://github.com/wez/wezterm/blob/main/color-types/src/lib.rs>
* A _binary tree with a Zipper based Cursor implementation_: <https://github.com/wez/wezterm/blob/main/bintree/src/lib.rs>
  * <https://www.st.cs.uni-saarland.de//edu/seminare/2005/advanced-fp/docs/huet-zipper.pdf>
  * <https://donsbot.wordpress.com/2007/05/17/roll-your-own-window-manager-tracking-focus-with-a-zipper/>
  * <https://stackoverflow.com/a/36168919/149111>
* The website is generated with [mdBook](https://rust-lang.github.io/mdBook/index.html)