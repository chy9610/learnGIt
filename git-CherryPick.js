// git cherry-pick    将指定的提交（commit）应用于其他分支，支持多个分支的应用
//   -- git cherry-pick <commitHash | branchName> <commitHash | branchName> <commitHash | branchName> ...
//   举个栗子：
//       主分支（master）中含有修改 a、b、c
//       次分支（fature）中含有修改 d、e、f
//
//       问题：先需要将次分支（fature）的 f 修改应用到主分支（master）中？
//
//       操作：1、切换到主分支（master）  ->   git checkout master
//             2、将次分支（fature）的 f 修改应用于主分支（master），即Cherry pick操作  ->   git cherry-pick f
//             3、操作完成之后查看主分支上的提交记录   ->   git log -2 ,如能查看到 f 修改则为操作成功。



// 如果想要转移一系列的连续提交，我们可以使用简便的语法：   
//   我们转移从A到B所有的提交,它们的必须按照正确的顺序放置（A早于B），否则指令不会执行成功（***不会报错***）  ->   git cherry-pick A..B
//
//   注意：上面这条指令“提交A”不会被包含在内。如果想要包含“提交A”，那么我们需要这么写：  ->    git cherry-pick A^..B



// git cherry-pick 指令的常用配置项如下:::
    // 1、-e , --edit                          打开外部编辑器，编辑提交信息。
    // 2、-n , --no-commit                     只更新工作区和暂存区，不产生新的提交。
    // 3、-s , --signoff                       在提交信息的末尾追加 操作者的签名，方便查看是谁进行的操作
    // 4、-m parent-number, 
    //    --mainline parent-number             -m 配置项告诉Git，应该采用哪个分支的改动。它的参数 parent-number 是一个从 1 开始的整数，代表原始提交的父分支编号。
    //                                          指令： git cherry-pick -m 1 <commitHash>
    // 5、-x                                   在提交信息的末尾追加一行 （cherry pick from commit ...）方便以后查看这个提交是如何产生的。


// 如果在 git cherry-pick 的过程中，出现代码冲突的情况。
// 1、--continue 
//    在用户解决完冲突之后，将第一步所修改的文件重新提交到暂存区（git add .）,然后继续执行 Cherry pick。
//    git cherry-pick --continue
// 2、--abort
//    如果解决完冲突之后，不再执行合并，想要回到操作前的状态
//    git cherry-pick --abort
// 3、--quit
//    如果解决完冲突之后，退出 Cherry pick
//    git cherry-pick --quit


