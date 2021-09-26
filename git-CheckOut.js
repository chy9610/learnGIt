// git checkout 命令用于切换分支或回复工作树文件，它是一个最常用的命令，同样也是一条最危险的命令，原因在于它会重写工作区域。

// 1、切换分支
//    git checkout <branchName>

// 2、创建分支并切换到该分支
//    git checkout -b <branchName>

// 3、只放弃工作区全部的修改
//    git checkout .

// 4、只放弃工作区中某个文件的修改
//    git checkout -- <fileName>    

// 5、强制放弃index和工作区的修改
//    git checkout -f
//    ***  这是一个不可逆的操作，会直接覆盖，但是还是很有用的。如果真的想放弃默写改动，SVN 会删除 update，但是 git 上不能操作，而 git checkout 刚好满足这个需求。 ***