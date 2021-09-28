// 一台新的电脑，从远程仓库中拉取代码到本地
// 1、下载 git 
// 2、创建一个文件夹 == mkdir
// 3、初始化本地仓库 == git init
// 4、连接远程仓库 == git remote add origin <git@github.com:xxx/xxx.git>
// 5、远程仓库拉取主分支代码 == git pull --rebase origin master
// 6、修改本地文件之后
//     -- 查看本地文件修改状态，确认是否正确修改文件 == git status
//     -- 确认本地文件修改状态之后，本地提交所修改的文件到版本控制库中
//         ++ 提交单个文件 == git add <filename>
//         ++ 提交全部文件 == git add .
// 7、提交此次修改并添加此次修改的相关说明 == git commit -m "describe"
// 8、首次推送需要写推送方向 == git push -u origin master -> 推送到远程的master分支(首次)
//     -- 在以后的推送中如果不选择推送分支，则默认使用上次推送的分支


// 在另一台电脑中拉取远程仓库代码可能需要在远程仓库中配置对应电脑的公钥
// 1、获取本地公钥 cat ~/.ssh/id_rsa.pub
// 2、在远程仓库中对应的项目中配置ssh，将本地公钥粘贴进去
// 3、设置推送的账号名称
//     -- git config --global user.name <Name>
//     -- git config --global user.email <Email>
// 4、配置好之后可以使用 git config -l 查看配置


  /** 安装Git之后一下操作↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    *
    * 一、配置Git仓库的账户与Email地址
    *   ||
    *   || $ git config --global user.name "Your Name"
    *   || $ git config --global user.email "email@email.com"
    *   ||
    *   || >>> 因为Git是分布式版本控制系统，所以每台机器都需要自报家门：你的名字与邮箱地址
    *   || *** 注意 git config 命令的 --global 参数，用了这个参数就表示你这台机器上的所有git仓库都会使用这个配置
    *   ||    当然也可以对某个仓库指定不同的账户与Email地址
    *
    * 二、创建git版本仓库（执行一次）
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git init                                                                           |
    *   || | Initialized empty Git repository in /Users/michael/learngit/.git/                    |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   ||
    *   || >>> 在指定文件目录下打开 Git Bash 命令窗口，执行此命令。以上情况即为成功(#^.^#)！！
    *
    * 三、提交文件（Git命令必须在Git仓库目录内执行，在仓库目录外执行是没有意义的。）
    *   ||
    *   || Git提交文件分为两步：
    *   ||
    *   || 第一步：
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git add readme.txt                                                                 |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || >>> 将文件添加到仓库（缓存区）
    *   ||
    *   || 第二步：
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git commit -m "Add New File"                                                       |
    *   || | [master (root-commit) eaadf4e] wrote a readme file                                   |
    *   || | 1 file changed, 2 insertions(+)                                                      |
    *   || | create mode 100644 readme.txt                                                        |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   ||
    *   || >>> 将文件提交到仓库（实际提交本地仓库）
    *   || *** 指令 git commit 的 -m 参数后面输入的是本次提交的详细说明。可以不填写（强烈不推荐，影响别人的阅读）
    *   ||     提交成功之后的信息：
    *   ||     1 file changed ：一个文件改动
    *   ||     2 insertions(+): 插入了两行内容
    *   ||
    *   || &&& 如果你添加或者修改多个文件，则可以先执行第一步，将多个文件先添加到仓库（缓存区）中。
    *   ||     然后执行第二步将仓库（缓存区）中的文件一次性提交并加上此次操作的描述说明。
    *
    * 四、修改文件
    *   ||
    *   || 修改文件之后，运行 git status 查看文件状态
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git status                                                                         |
    *   || | On branch master                                                                     |
    *   || | Changes not staged for commit:                                                       |
    *   || |  (use "git add <file>..." to update what will be committed)                          |
    *   || |  (use "git checkout -- <file>..." to discard changes in working directory)           |
    *   || |                                                                                      |
    *   || |    modified:   readme.txt                                                            |
    *   || |                                                                                      |
    *   || | no changes added to commit (use "git add" and/or "git commit -a")                    |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   ||
    *   || >>> 以上信息告诉我们文件已经被修改，如果我们想知道修改的内容有哪些。
    *   ||     我们需要运行 git diff 查看修改的内容
    *   ||
    *   || 知道我们修改的内容之后，我们需要将其添加到仓库（缓存区）。
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git add <file>                                                                     |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || 在 git commit 提交文件之前，使用 git status 查看文件状态
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git status                                                                         |
    *   || | On branch master                                                                     |
    *   || | Changes to be committed:                                                             |
    *   || |   (use "git reset HEAD <file>..." to unstage)                                        |
    *   || |                                                                                      |
    *   || | 	modified:   readme.txt                                                            |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || >>> 需要被提交的是 readme.txt 文件，我们可以放心提交了！
    *   ||
    *   || 提交之后，我们再次执行 git status 查看文件状态
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git status                                                                         |
    *   || | On branch master                                                                     |
    *   || | nothing to commit, working tree clean                                                |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *
    *   || 五、版本回退
    *   || 版本控制系统肯定有某个命令可以告诉我们历史记录，在Git中，我们用 git log 命令查看
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git log                                                                            |
    *   || | commit 1094adb7b9b3807259d8cb349e7df1d4d6477073 (HEAD -> master)                     |
    *   || | Author: Michael Liao <askxuefeng@gmail.com>                                          |
    *   || | Date:   Fri May 18 21:06:15 2018 +0800                                               |
    *   || |      append GPL                                                                      |
    *   || |                                                                                      |
    *   || | commit e475afc93c209a690c39c13a46716e8fa000c366                                      |
    *   || | Author: Michael Liao <askxuefeng@gmail.com>                                          |
    *   || | Date:   Fri May 18 21:03:36 2018 +0800                                               |
    *   || |      add distributed                                                                 |
    *   || |                                                                                      |
    *   || | commit eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0                                      |
    *   || | Author: Michael Liao <askxuefeng@gmail.com>                                          |
    *   || | Date:   Fri May 18 20:59:18 2018 +0800                                               |
    *   || |      wrote a readme file                                                             |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || >>> git log 命令显示从最近到最远的提交日志
    *   ||
    *   || 如果嫌输出信息太多，看得眼花缭乱的，可以试试加上--pretty=oneline参数:
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git log --pretty=oneline                                                           |
    *   || | 1094adb7b9b3807259d8cb349e7df1d4d6477073 (HEAD -> master) append GPL                 |
    *   || | e475afc93c209a690c39c13a46716e8fa000c366 add distributed                             |
    *   || | eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0 wrote a readme file                         |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || >>> 一大串类似1094adb...的是commit id（版本号）
    *   ||     因为Git是分布式的版本控制系统，后面我们还要研究多人在同一个版本库里工作，如果大家都用1，2，3……作为版本号，那肯定就冲突了
    *   ||
    *   || 如果我们想将文件回退到上一个版本，该怎么做呢？
    *   || 我们可以使用 git reset 命令
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git reset --hard HEAD^                                                             |
    *   || | HEAD is now at e475afc add distributed                                               |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || >>> 在Git中，HEAD表示当前版本，HEAD^表示上一个版本，那HEAD^^就表示上上一个版本，当然如果你想找上100个版本，那就可以写100个^。由于太麻烦，所以携程HEAD~100
    *   ||     --bard 的含义在下面会讲到(#^.^#)
    *   ||
    *   || 查看文件的内容是否为上一个版本，我们可以使用 cat <file>,例如：
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ cat readme.txt                                                                     |
    *   || | Git is a distributed version control system.                                         |
    *   || | Git is free software.                                                                |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   ||
    *   || 如果我们想返回最新的版本，我们可以通过指定 commit ID 回溯版本，操作例子如下：
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git reset --hard 1094a                                                             |
    *   || | HEAD is now at 83b0afe append GPL                                                    |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || *** 指定的 commit ID 填写前几位就可以了！当然我们不能只填写前两位，因为 Git 会找到多个版本，无法确定到底是哪一个了。
    *   || >>> 回溯之后可执行 cat <file> 查看文件的内容
    *   ||
    *   || 如果第二天后悔了，别急，在 Git 中还是有后悔药可以吃的。
    *   || Git 提供了一个命令 git reflog 来记录你的每一次命令。栗子：
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git reflog                                                                         |
    *   || | e475afc HEAD@{1}: reset: moving to HEAD^                                             |
    *   || | 1094adb (HEAD -> master) HEAD@{2}: commit: append GPL                                |
    *   || | e475afc HEAD@{3}: commit: add distributed                                            |
    *   || | eaadf4e HEAD@{4}: commit (initial): wrote a readme file                              |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || 通过命令 git reflog 我们可以看到版本的id（commit ID），那么我们就可以乘坐时光机回来了！(*^▽^*)！！！
    *   ||
    *   || &&& Git允许我们在版本的历史之间穿梭，使用命令 git reset --hard commit_id
    *   ||     在穿梭的过程中，我们可以使用命令 git log 查看提交历史，命令 git reflog 查看命令历史。查阅到每个版本的 commit ID
    *
    * 六、工作区和暂存区
    *   ||
    *   || 工作区就是本地仓库目录，比如 learnGit 文件夹就是一个工作区
    *   || git add命令实际上就是把要提交的所有修改放到暂存区（Stage），然后，执行git commit就可以一次性把暂存区的所有修改提交到分支。
    *   || 图片示例：https://static.liaoxuefeng.com/files/attachments/919020074026336/0
    *   || 每次执行 git commit 命令之后，缓存区中没有任何文件内容，全部被提交至分支
    *
    * 七、撤销修改与删除文件
    *   ||
    *   || 如果我们想丢弃工作区的修改，我们可以使用命令 git checkout -- <file>
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git checkout -- test.txt                                                           |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || *** 需要注意的地方：git checkout -- <file> 命令中的 -- 很重要。如果没有 -- ，就会变成 “切换另一个分支” 的命令，在后面的分支管理中我们还会再遇到 git checkout
    *   ||
    *   || 如果我们修改错了文件，并且执行了 git add 命令。我们现在想撤回缓存区中文件的修改，那么我们可以执行 git resrt HEAD <file> 命令，将缓存区的修改撤销掉。栗子：
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git reset HEAD readme.txt                                                          |
    *   || | Unstaged changes after reset:                                                        |
    *   || | M	readme.txt                                                                        |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || >>> git reset 命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用 HEAD 时，表示最新的版本。
    *   ||
    *   || 在Git中，删除也是一个修改操作。一般情况下，我们会在文件管理器中将没用的文件删除，或者使用 rm 删除命令。
    *   || Git会知道哪些文件被修改或删除。可以使用 git status 命令查看文件状态。
    *   ||
    *   || >>> 这时候我们有两种选择：
    *   || 1、确实要从版本库中删除此文件，那么我们就用命令 git rm 删除文件，并且使用命令 git commit 提交此次操作。
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git rm test.txt                                                                    |
    *   || | rm 'test.txt'                                                                        |
    *   || |                                                                                      |
    *   || | $ git commit -m "remove test.txt"                                                    |
    *   || | [master d46f35e] remove test.txt                                                     |
    *   || |  1 file changed, 1 deletion(-)                                                       |
    *   || |  delete mode 100644 test.txt                                                         |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || *** 先手动删除文件，然后使用git rm <file>和git add<file>效果是一样的。
    *   ||
    *   || 2、如果是一不小心删错了，我们使用 git checkout 命令将文件恢复至最新版本。
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || | $ git checkout -- test.txt                                                           |
    *   ||  —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— —— ——
    *   || *** 从来没有被添加到版本库就被删除的文件，是无法恢复的！ ***
    */