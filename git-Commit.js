// 1、提交暂存区到仓库区
//    git commit -m <commitMessage>

// 2、提交暂存区的指定文件到仓库区
//    git commit <file1> <file2> ... -m <commitMessage>

// 3、提交工作区自上次commit之后的变化，直接到仓库区
//    git commit -a

// 4、提交时显示所有diff信息
//    git commit -v

// 5、使用一次新的commit，替换上一次的提交。#如果代码没有任何变化，则为改写上一次commit的提交信息。#
//    git commit -amend -m <commitMessage>

// 6、重做上一次commit，并指定文件的新变化
//    git commit -amend <file1> <file2> ... 