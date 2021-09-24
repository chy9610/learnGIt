// 1、列出所有的本地分支
//    git branch

// 2、列出所有的远程分支
//    git branch -r

// 3、列出所有的本地分支和远程分支
//    git branch -a

// 4、新建一个分支，但依然停留在当前分支
//    git branch <branchName>  

// 5、新建一个分支，并切换到该分支
//    git branch -b <branchName>

// 6、新建一个分支，指向指定分支
//    git branch <branchName> <commitHash>

// 7、新建一个分支，与指定的远程分支建立追踪关系
//    git branch --track <branchName <remoteBranch>

// 8、切换到指定的分支，并更新工作区
//    git checkout <branchName>

// 9、切换到上一分支
//    git checkout -

// 10、建立追踪关系，在现有的分支与指定的远程分支之间
//    git branch --set-upstream <branchName> <remoteBranch>

// 11、合并指定分支到当前分支
//    git merge <branchName>

// 12、选择一个commit，合并到当前分支
//    git cherry-pick <commitHash>

// 13、删除分支
//    git branch -d <branchName>

// 14、删除远程分支
//    git push origin --delete  <branchName>
//    git branch -dr <remote/branch>