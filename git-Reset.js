// git reset 指令用于回退版本，可以指定退回到某一次提交的版本
// 语法格式如下：
//       git reset  [--soft | --mixed | --hard] [HEAD]

// git reset 配置项：
// 1、--mixed 默认，可以不带该参数，用于重置暂存区的文件与上一次的提交（commit）保持一致，工作文件内容保持不变。
// 2、--soft 用于回退到某个版本
// 3、--hard 撤销工作区中所有未提交的修改的内容，将暂存区与工作区都回到上一个版本，并删除之前所有的提交信息（commit）
// 4、--worktree 


//    栗子：
//         git reset --hard HEAD~3              #回退至上上上一个版本
//         git reset --hard bae128              #回退到某个版本回退点之前所有信息
//         git reset --hard origin/master       #将本地状态回退到跟远程状态一样


// HEAD  说明：
// 1、HEAD      #当前版本
// 2、HEAD^     #上一个版本
// 3、HEAD^^    #上上一个版本
//  以此类推……

// 同样也可以使用 ~<number>| ^<number> 表示
// 栗子：
// HEAD~3 | HEAD^3      #回退至上上上一个版本


// git reset HEAD   #用于撤销已缓存的内容
// 被撤销缓存的文件，提交<commit>时，并不会被提交<commit>
// 这时我们可以执行以下命令：
//    git commit -am <fileName>

// #简而言之，执行 git reset HEAD 以取消之前 git add 添加，但不希望包含在下一个提交<commit>快照中的缓存。

