### git使用

+ git add -A;git commit -m "tag";git push origin master;-->联网推送到GitHub远程仓库
+ 先在git创建仓库,$ git clone git@github.com:michaelliao/gitskills.git命令行将git的仓库克隆到本地,在本地将文件放进去后,在重新上传到github,


+ 一些git bash命令:

  + git init:初始化一个git仓库

  + git add readme.txt:添加文件修改到暂存区,就是.git下的index(或者叫做stage),不add放入暂存区的修改都不会提交到分支,git add -A;提交当前仓库所有文件到暂存区

  + git status:查看仓库当前状态

  + git diff: 查看修改了什么内容

    + git commit -m "add readme.txt":把暂存区的所有内容提交到当前分支master

  + cat readme.txt:查看文件内容

  + git log:查看修改的历史记录,如果嫌输出信息太多，看得眼花缭乱的，可以试试加上`--pretty=oneline`参数：$ git log --pretty=oneline

  +  版本回退:git reset命令:$ git reset --hard HEAD^ ,回退到上个,HEAD^^回退到上上个,回退到100个,HEAD~100,HEAD指向的版本就是当前版本

  + git reflog:查看每一次的命令,可以版本穿梭,

  + 隐藏目录.git是Git的版本库

  + git checkout --readme.txt:把工作区的readme.txt文件修改全部清空,

  + git reset HEAD readme.txt:可以把暂存区的修改撤销掉（unstage），重新放回工作区：

    + ```tex
      场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。

      场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD file，就回到了场景1，第二步按场景1操作。

      场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。
      ```

  + git push -u origin master:第一次推送到远程仓库,后续用新的命令:$ git push origin master

  + 打标签:

    + 首先，切换到需要打标签的分支上：`$ git checkout master`
    + 然后，敲命令`git tag <name>`就可以打一个新标签：`$ git tag v1.0`
    + 可以用命令`git tag`查看所有标签：`$ git tag`
    + 还可以创建带有说明的标签，用`-a`指定标签名，`-m`指定说明文字：`$ git tag -a v0.1 -m "version 0.1 released" 3628164`
    + 默认标签是打在最新提交的commit上的。

  + 分支

    + Git鼓励大量使用分支：

      查看分支：`git branch`

      创建分支：`git branch <name>`

      切换分支：`git checkout <name>`

      创建+切换分支：`git checkout -b <name>`

      合并某分支到当前分支：`git merge <name>`

      删除分支：`git branch -d <name>`

### bash的一些命令

在无图形操作系统中,通过命令行来操作

1. `pwd`-->print work directory **打印当前路径**
2. `cd`-->change directory  **改变目录路径**-->`cd ..`(跳到上一级目录)-->`cd 代码`(跳入当前路径下的代码目录)-->`cd ~`(跳到自己的根目录)-->`cd /`回到根目录
3. `ls`-->list-->**打印目录的文件列表**-->ls -a(打印所有文件包括隐藏文件)-->`ls -l` ==`ll`打印所有文件包括文件信息-->`ls -a -l` 综述--`ls 目录名` 打印目录名下的文件
4. `clear`-->**清屏**.但是之前输入的命令在上方
5. `reset`-->**重新开启窗口**
6. `mkdir`--> make directory-->新建文件目录-->`mkdir js images`创建两个文件夹
7. `rmdir`-->remove directory--删除目录-->只能删除空的文件夹
8. `touch`-->创建文件` touch js/index.js css/index.css`创建当前目录下js文件里加index.js 和css文件下的index.css
9. `rm`-->`rm 文件`删除文件-->`rm -r 文件夹`删除文件夹,无法恢复-->`rm -rf 文件夹`强制删除整个目录
10. `cp`-->复制
11. `mv`-->剪切,重命名
12. `cat`-->查看文件所有内容
13. `less`-->查看文件部分内容




### 分支

1. 分支切换,保证在工作区和暂存区都干净的情况下,切换后再新建文件作业.`git status-->git checkout 新分支`
2. 工作区始终和仓库区的分支保持同步,即仓库分支有啥文件就会显示在工作区
3. 创建分支都是从master开始创建,创建分支时相当于复制一份master主分支作新建分支的基础.后再在新建分支上实现功能`git branch 新分支名`
4. 主分支master就是拿来显示完整的功能,不作工作区.拿来合并其他功能分支.
5. 合并分支:`git merge 新分支` 是合并新分支到当前分支上
6. 修改bug,会在最新的master上新建分支debug,然后开始修复bug
7. `git checkout -b 新分支名`创建并切换分支
8. `git branch -d 某分支` 在主分支上删除已经合并到master上的某分支;
9. 用`git log --graph`命令可以看到分支合并图。

#### 分支冲突

1. 代码在不同分支上写在同一行会冲突,手动修改,将自己的代码放在冲突位置后面就行了.是在master里修改冲突,然后重新add commit就行了.

### 远程仓库

中央仓库.

新建仓库-->初始化仓库`git init -bare` 创建裸仓库-->`git push 远程仓库地址/master`把本地仓库推送到远程仓库的master分支上-->`git clone 远程仓库的地址/自定义文件名` 获取到远程仓的代码-->`git pull 远程仓库地址/master` 拉取远程仓库的代码

远程仓库命名一般以.git结尾

### git blog

网址:https://leivy.github.io/

GitHub pages提供的免费服务器;

#### 新建一篇博客

1. 打开cmd-->`hexo new "blog name"`-->可以在./source/_posts文件夹下发现我们刚刚建立的 name.md文件。使用你熟悉的编辑器打开，便可以进行博文的撰写。
2. 博文写好-->`hexo g`--> 生成静态文件-->之后生成的文件会放在./public目录下，这便是我们将要部署到GitHub上的全部内容。
3. 静态文件生成后部署到GitHub上-->`hexo d` 
4. 然后刷新网页就可以啦啦啦~~~