# Elixir

## Doc

* [Official Site](https://elixir-lang.org/)
  * [Getting Started](https://hexdocs.pm/elixir/introduction.html)

## Tools

### IDE

* [IDE Support](https://github.com/elixir-lang/elixir/wiki/Code-Editor-Support)
* VSCode:
  * <https://marketplace.visualstudio.com/items?itemName=JakeBecker.elixir-ls>
  * <https://marketplace.visualstudio.com/items?itemName=elixir-tools.elixir-tools>
  * <https://marketplace.visualstudio.com/items?itemName=lexical-lsp.lexical>

### Static analyzers

* [Credo](https://github.com/rrrene/credo)
  * VSCode Extension: <https://marketplace.visualstudio.com/items?itemName=pantajoe.vscode-elixir-credo>
* Types Checking
  * Documenting types: [Typespecs](https://hexdocs.pm/elixir/1.12/typespecs.html)
  * [TypeCheck](https://github.com/Qqwy/elixir-type_check)
  * [Gradient](https://github.com/esl/gradient)
    * Based on Erlang's [Gradualizer](https://github.com/josefs/Gradualizer)
  * **[Dialyzer](https://www.erlang.org/doc/apps/dialyzer/dialyzer.html)**
    * Erlang-based, but wrapped by
      * [Dialyxir: Mix tasks to simplify use of Dialyzer in Elixir projects](https://github.com/jeremyjh/dialyxir)
    * [Adding Dialyzer without the Pain](https://fly.io/phoenix-files/adding-dialyzer-without-the-pain/)

### Debugging

* [Three Ways to Debug Code in Elixir](https://blog.appsignal.com/2021/11/30/three-ways-to-debug-code-in-elixir.html)
* [Debugging Phoenix and Elixir Applications in Visual Studio Code](https://medium.com/geekculture/debugging-phoenix-and-elixir-applications-in-visual-studio-code-5f1b63a6713b)
* [Debugging Elixir Code: The Definitive Guide](https://curiosum.com/blog/debugging-elixir-code-the-definitive-guide)
* [GitHub Gist: vscode_elixir_debugger_instructions.md](https://gist.github.com/Tomboyo/ef8db1ed6beb2a88a8d5fb1d7ff3d76b)

## Articles

* Language tutos
  * [Elixir : Basics of structs](https://arunramgt.medium.com/elixir-basics-of-structs-e8587225a113)
* Static/Strong Typing
  * [My Future with Elixir: set-theoretic types](https://elixir-lang.org/blog/2022/10/05/my-future-with-elixir-set-theoretic-types/)
    * [Programming with Union, Intersection, and Negation Types](https://www.irif.fr/~gc/papers/set-theoretic-types-2022.pdf) (PDF)
  * [Strong arrows: a new approach to gradual typing](https://elixir-lang.org/blog/2023/09/20/strong-arrows-gradual-typing/)
  * [Elixir is dynamically and strongly typed](https://phoenixonrails.com/blog/elixir-is-dynamically-and-strongly-typed)
  * Discussion: [Typechecker for Elixir](https://elixirforum.com/t/typechecker-for-elixir/34474/3)
* Debugging
  * [Debugging Elixir Code: The Definitive Guide](https://curiosum.com/blog/debugging-elixir-code-the-definitive-guide)
* Macros
  * [Implement a Basic block/yield with Elixir](https://medium.com/elixirlabs/implement-a-basic-block-yield-with-elixir-d00f313831f7):  

    ```elixir
    defmodule TimeFrame do
      defmacro execute(name, units \\ :micro_seconds, do: yield) do
        quote do
          start = System.monotonic_time(unquote(units))
          result = unquote(yield)
          time_spent = System.monotonic_time(unquote(units)) - start
          IO.puts("Executed #{unquote(name)} in #{time_spent} #{unquote(units)}")
          result
        end
      end
    end

    # Usage
    require TimeFrame
    result1 = 
      TimeFrame.execute "ti1" do
        3 + 5 * 912312313123
      end
    # Executed ti1 in 5 micro_seconds
    # 4561561565618
    result2 = 
      TimeFrame.execute "ti2", :seconds do
        IO.puts("sth")
        3 + 5
      end
    # sth
    # Executed ti2 in 0 seconds
    # 8
    ```
