# 3D

## OpenGL

### OpenGL related Libs

* GLU - OpenGL Utility Library: <https://fr.wikipedia.org/wiki/OpenGL_utility_library>
* GLUT - OpenGL Utility Toolkit: Window Handling - <https://fr.wikipedia.org/wiki/OpenGL_utility_toolkit>
  * Superseeded by freeglut/OpenGLUT or better: GLFW
* GLUI - OpenGL User Interface (based on GLUT) - <https://fr.wikipedia.org/wiki/OpenGL_user_interface_library> (license: LGPL)
* GLFW - OpenGL FrameWork: Window Management - <https://www.glfw.org/> (license: zlib/libpng)
* GLEW - OpenGL Extension Wrangler: OpenGL Extension management - <https://fr.wikipedia.org/wiki/OpenGL_extension_wrangler_library> (License: BSD, SFI, GLX, except Codegen scripts: GPL)
* GLUX - OpenGL Useful eXtensions: <https://community.khronos.org/t/glux-library/60866>

### Tutos/Docs

* [The Red Book](https://perso.esiee.fr/~perrotol/TheRedBook-1.0/) 1994!
* <https://learnopengl.com/In-Practice/2D-Game/Breakout>
  * Code: <https://github.com/JoeyDeVries/LearnOpenGL>
  * Breakout (example game): <https://github.com/Shot511/GameBreakout>
* Lectures: <http://www.cs.sjsu.edu/~bruce/fall_2016_cs_116a_lecture_introduction_to_opengl_and_glut.html>
* eBook - Computer Graphics with OpenGL (Source Code): <https://wps.prenhall.com/ecs_hearn_cg_o_gl_4/>
* <http://openglgui.sourceforge.net/gui_tut1.html>
* List of Gui fx (as of 2018): <https://philippegroarke.com/posts/2018/c++_ui_solutions/>
* For embedded devices: <https://itnext.io/top-five-libraries-for-creating-gui-on-embedded-linux-5ce03903be32>

### Gui

#### DearImGui

* <https://github.com/ocornut/imgui>
* <https://github.com/mellinoe/ImGui.NET>
* Article: <https://ruurdsdevlog.wordpress.com/2020/03/07/c-desktop-application-with-dear-imgui/>
* Screenshots: <https://github.com/ocornut/imgui/issues/2847>
* Companion projects:
  * ImGuiFreetype: <https://github.com/ocornut/imgui/blob/master/misc/freetype/imgui_freetype.h>, <https://github.com/ocornut/imgui/issues/618>
  * ImGuiFontStudio: <https://github.com/aiekick/ImGuiFontStudio>
* Styling: <https://github.com/ocornut/imgui/issues/4722>
  * ![s1](https://user-images.githubusercontent.com/8225057/83686737-094a8e00-a5eb-11ea-9046-3b9f1c4b5e62.png)
  * ![s2](https://user-images.githubusercontent.com/8225057/101669949-e1812a80-3a52-11eb-8e1b-b93baf73f7ed.png) ![s3](https://user-images.githubusercontent.com/8225057/101669972-e80fa200-3a52-11eb-97cf-ff12cbd5e45e.png)
  * ![s4](https://user-images.githubusercontent.com/8225057/141762569-92d0ff1d-1bb0-49ee-84a7-56157903c420.png) ![s5](https://user-images.githubusercontent.com/8225057/141763071-bb0fc6aa-3f37-4a0a-89e6-ddb48c65f411.png)

### ImGui.NET

* rgat: <https://github.com/ncatlin/rgat> (See also <https://ncatlin.github.io/rgatPages/tracing/2021/11/19/visualising-hello-world.html>)
  * ![rgat](https://camo.githubusercontent.com/e76a2d40d2a7d4ad1a3444838aa9f6ab29247e0e6d6a59ba4f7c897fbcaf48bf/68747470733a2f2f6e6361746c696e2e6769746875622e696f2f7267617450616765732f696d672f706c6f746769662e676966)
* Cafe Shader Studio: <https://github.com/KillzXGaming/Cafe-Shader-Studio>
* ![Cafe Shader Studio](https://user-images.githubusercontent.com/13475262/115976415-eba45100-a53b-11eb-9893-a6988c57e7d6.png)

#### Others

* Adrien Heruble's imgui: <https://github.com/AdrienHerubel/imgui>

* SO Questions, Youtube Videos, Articles:
  * <https://gamedev.stackexchange.com/questions/3617/good-gui-for-opengl>
  * <https://gamedev.stackexchange.com/questions/24103/immediate-gui-yae-or-nay>
  * <https://www.gamedev.net/forums/topic/708033-suggestions-regarding-rendering-ui-elements-and-text-with-opengl/>
    * <https://www.gamedev.net/juliean/>
  * [Strategies for optimizing OpenGL-based animated/zoomable 2D UI rendering](https://stackoverflow.com/questions/16379701/strategies-for-optimizing-opengl-based-animated-zoomable-2d-ui-rendering)
  * [OpenGL GUI](https://www.youtube.com/watch?v=6a5UCp7JZmE)
  * [C++ OpenGL GUI library: fast realtime prototyping in XML](https://www.youtube.com/watch?v=Ij3eME3u2Vk)
  * [C++ OpenGL GUI Library DevLog 3: Making of TreeView | illuxUI](https://www.youtube.com/watch?v=U1FJopk1z80)
  * [Flexible UI with OpenGL and yoga library](https://www.youtube.com/watch?v=hO4OL6L5KEk)
    * See also <https://gist.github.com/mochja/c4788a4801885b58c1e38d7fb4c091a9>
  * [C++ OpenGL GUI](https://www.youtube.com/watch?v=3Ig7ijHNNh4)
  * [Developing Graphical user interface widgets with OpenGL](http://www.cs.sjsu.edu/~bruce/fall_2016_cs_116a_lecture_developing_graphical_user_interface_widgets_with_opengl.html)
* NanoGUI
  * <https://github.com/wjakob/nanogui>
  * NanoVG: <https://github.com/memononen/NanoVG>
  * NanoVG .NET: <https://github.com/sbarisic/nanovg_dotnet>
* nui3: <https://github.com/libnui/nui3>
  * Example App: <https://github.com/meeloo/xspray>
* GLGUI (C#): <https://github.com/ands/GLGUI>
* Fyne (Go): <https://github.com/fyne-io/fyne>
  * <https://github.com/fyne-io/fyne>
* GLV: <https://github.com/alexesDev/glv>
  * <https://w2.mat.ucsb.edu/glv/>
* Nuklear: <https://github.com/Immediate-Mode-UI/Nuklear>
  * Nuklear: <https://dexp.in/articles/nuklear-intro/>
  * Nuklear+: <https://dexp.in/articles/nuklear-cross/>
* SimpleGUI: <http://marcinignac.com/blog/simplegui/>
* QuickGUI: <https://wiki.ogre3d.org/QuickGUI>
* MyGUI: <http://mygui.info/> -> <https://github.com/MyGUI/mygui>
* Cpp-OpenGL-Gui: <https://github.com/zotya701/Cpp-OpenGL-GUI>
* AssortedWidgets
  * <https://github.com/shi-yan/AssortedWidgets>
  * 3d Modeller: <https://github.com/shi-yan/Pillow>
  * Article (WebAssembly): <https://shiyan.medium.com/rejuvenate-my-old-opengl-gui-with-webassembly-1d46a6baa52e>
* Neogfx: <https://neogfx.org/>
* libRocket (GL + HTML + CSS): <https://github.com/libRocket/libRocket>
  * .NET Wrapper: <https://nosebleedstudios.wordpress.com/2014/10/29/librocket-net-a-librocket-net-wrapper/>
* Crazy Eddie's GUI (CEGUI): <http://cegui.org.uk/wiki/Main_Page>
* GWEN: <https://github.com/garrynewman/GWEN>
  * .NET (Port?): <https://github.com/Yeyti/Gwen.CS>
* Gigi: <http://gigi.sourceforge.net/>
* Rae (D): <http://www.dsource.org/projects/rae>
* Misc:
  * <https://github.com/sp4cerat/Game-GUI>
  * C# based (wip) "Hello ImGui": <https://github.com/zwcloud/ImGui>
  * [SpeedyPainter](https://speedypainter.altervista.org/) has its own OpenGL based Gui
  * Ephtracy's (the author of [MagicaVoxel](https://ephtracy.github.io/)) custom gui is also very nice.

### Screenshots

#### Dear ImGui

![Dear ImGUI 1.86](https://user-images.githubusercontent.com/1991296/139575872-af594c30-e77a-4655-9de0-9dad25a4cf39.gif)

![Dear ImGUI 1.86](https://user-images.githubusercontent.com/8225057/140297918-81e23ddc-7a03-4fd1-9291-ed09d4873442.jpg)

[Luapad](https://coffeecupentertainment.com/static/luapad/luapad.html):

![Dear ImGUI 1.85](https://user-images.githubusercontent.com/22665978/132129920-c130b94e-0bda-4cc6-b253-3f626b5fb351.png)

![Dear ImGUI](https://raw.githubusercontent.com/wiki/ocornut/imgui/web/v167/v167-misc.png)

![Dear ImGUI](https://cloud.githubusercontent.com/assets/8225057/20628927/33e14cac-b329-11e6-80f6-9524e93b048a.png)

![Dear ImGUI](https://pbs.twimg.com/media/EUDSptTX0AIgyuZ.jpg)

#### NanoGUI, NanoVG, NanoVG .NET

![NanoGUI](https://github.com/wjakob/nanogui/raw/master/resources/screenshot.png)

![NanoVG](https://github.com/memononen/nanovg/blob/master/example/screenshot-01.png?raw=true)

![NanoVG.NET](/images/opengl/nanovg_net.png)

#### nui3

![nui3](https://raw.githubusercontent.com/meeloo/xspray/master/XsprayScreen.png?raw=true)

#### GLGUI

[glgui](<https://github.com/ands/GLGUI>)

![glgui](/images/opengl/glgui.png)

#### Fyne

|    |    |    |
| -- | -- | -- |
| ![fyne](https://raw.githubusercontent.com/fyne-io/fyne/master/img/widgets-dark.png) | ![fyne](https://raw.githubusercontent.com/fyne-io/fyne/develop/img/widgets-mobile-light.png) | ![fyne](https://raw.githubusercontent.com/fynelabs/notes/main/img/screenshot.png) |

![fyne-desktop](https://raw.githubusercontent.com/fyne-io/fynedesk/master/desktop-dark-current.png)

#### GLV

|    |    |
| -- | -- |
| ![glv](https://w2.mat.ucsb.edu/glv/gfx/Screenshot1.png) | ![glv](https://w2.mat.ucsb.edu/glv/gfx/Screenshot2.png) |

#### Nuklear

![nuklear](https://cloud.githubusercontent.com/assets/8057201/9976995/e81ac04a-5ef7-11e5-872b-acd54fbeee03.gif)

#### SimpleGUI

![simplegui](http://marcinignac.com/blog/simplegui/simplegui.png)

#### QuickGUI

![quickgui](http://mygui.info/images/screenshots_3.2.1/8.png)

#### AssortedWidgets

![AssortedWidgets](https://github.com/shi-yan/AssortedWidgets/raw/master/docs/screenshot.png)

![AssortedWidgets_Pillow](https://github.com/shi-yan/Pillow/raw/master/OldScreenshots/anim.gif)

#### Neogfx

![Neogfx](https://neogfx.org/images/materialdesign.png)

#### libRocket

#### CEGUI

![cegui](https://a.fsdn.com/con/app/proj/crayzedsgui/screenshots/322394.jpg/max/max/1)

#### GWEN

![gwen](https://djungxnpq2nug.cloudfront.net/image/cache/5/7/57f6d4291d52c9346c7f722ccd285e3c-1024.jpg)

![gwen.net](https://camo.githubusercontent.com/1908587776ac57e6ee8a21f61b45b35a1664172e20b63cb6bddf16fa91c86a0f/68747470733a2f2f70702e757365726170692e636f6d2f633833373133362f763833373133363738362f35396632392f5261493432624f3975716b2e6a7067)

#### Gigi

![gigi](http://gigi.sourceforge.net/screenshots/FreeOrion-production.png)

![gigi](http://freeorion.sourceforge.net/screenshots/techscreen.jpg)
