# 常见开发环境安装
页面导航：
* [C语言](#c语言)

## 图例
* ⭐️ 推荐
* ✅ 可用
* ❌ 不推荐

## C语言
如果不出意外（19级），C语言是大家进入大学以来所学习的第一门语言。它语法简单、可直接编译为可执行文件、运行速度快，非常适合想系统学习本专业的新手入门。在它面前，Python简直慢得像只乌龟。同时如果你想读本专业的硕士研究生或参加一些含金量较高的算法比赛（如ACM），C语言一定是一个绕不过去的坎。
### 常见C语言开发环境
#### Windows系统
* ⭐️ [Visual Studio2022社区版](https://visualstudio.microsoft.com/zh-hans/downloads/)：微软官方推出的集成开发环境（IDE），可用于开发包括C、C++、C#在内的各种“Win”系程序，并提供相当完备的调试功能。美中不足的是体积较大，需要手动选择安装依赖项，操作相对复杂。此外一定要下载社区版，专业版和企业版是要钱的。
* ⭐️ [小熊猫C++(IDE集成开发环境,密码：f0tp)](https://wwe.lanzoui.com/b01os0mwd)：社长推荐，我没用过（逃）~
* ✅ VS Code：怀着纠结的心态写了这一条……VS Code主要面向群体为web开发人员，对C语言的支持不是很好。此外这个东西并不是一下下来就能用，写C的话要配置很多东西，新手慎入。啥，下载链接？官网的下载速度灰常灰常慢（真的很慢！），可以自行百度找个国内镜像，实在不懂来问我也OK。
* ❌ CLion：付费软件，需要破解和配置CMake，新手不推荐。
#### Mac系统
> ~~像我这种穷鬼哪里买得起Mac这种高级货~~
* C语言编译器（gcc）安装步骤：
  1. 打开终端，安装Homebrew套件管理工具\
推荐教程：https://zhuanlan.zhihu.com/p/111014448
  2. 安装完成后，打开终端输入brew install gcc（只要gcc即可，它可以将.c文件经过编译、链接为可执行文件并运行）

p.s. pta也是使用Linux环境，gcc编译器执行C语言代码的
  