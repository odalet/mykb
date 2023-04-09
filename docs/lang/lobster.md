# Lobster

|                                                                                        |                                                                 |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| <img src="https://strlen.com/img/lobster/lobster.svg" alt="LobsterLang" width="200" /> | [THE LOBSTER PROGRAMMING LANGUAGE](https://strlen.com/lobster/) |

```python
def find(xs, fun):
    for(xs) x, i:
        if fun(x):
            return i
    return -1

let r = 2
let i = find [ 1, 2, 3 ]: _ > r
```

* GitHub: <https://github.com/aardappel/lobster>
* [Documentation](https://aardappel.github.io/lobster/README_FIRST.html)
  * [Shooter Tutorial](https://aardappel.github.io/lobster/shooter_tutorial.html)
  * [Language Reference](https://aardappel.github.io/lobster/language_reference.html)
  * [Philosophy](https://aardappel.github.io/lobster/philosophy.html)
  * [Type System](https://aardappel.github.io/lobster/type_checker.html)
  * [Memory Management](https://aardappel.github.io/lobster/memory_management.html)
* [How to use VSCode with Lobster](https://aardappel.github.io/lobster/vscode_ide.html)
    > **Running Lobster programs from within the editor**
    >
    > * Copy docs/vscode/tasks.json to a .vscode workspace folder that is in the root of where you keep your lobster code.
    > * Load some lobster code. pressing ctrl+shift+b should run it. If there was an error, press F8 to go to it, and/or ctrl+` (shell) to show program output.
    >
    > **Syntax Highlighting**
    >
    > * Copy the folder docs/vscode/lobster to .vscode/extensions within your user folder, not your workspace folder. This will enable syntax highlighting next time VSCode is run.
