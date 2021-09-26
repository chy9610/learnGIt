// git diff 指令对比文件的不同，即比较文件在暂存区与工作区的差异。
// 显示已写入暂存区和已经被修改但尚未写入暂存区的文件对比区别。

// git diff 主要应用场景：
// 1、尚未缓存的改动               git diff
// 2、已经缓存的改动               git diff --cached
// 3、已缓存与未缓存所有改动        git diff HEAD
// 4、显示摘要而非整个diff         git diff --start



// 栗子：
// 一、显示暂存区与工作区的差异
//    git diff <fileName>

// 二、显示暂存区与上一次提交<commit>的差异
//    git diff --cached <fileName>
//    或
//    git diff --staged <fileName>

// 三、显示两次提交<commit>之间的差异
//    git diff <firstBranch>...<secondBranch>
