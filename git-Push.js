
// git push  指令用于将本地版本分支上传至远程仓库并合并

// 命令格式如下：
//    git push <remote_name> <short_branch_name>:<remote_branch_name>
//    
//    # 如果本地分支与远程分支名称相同可省略冒号
//    git push <remote_name> <short_branch_name>

// 1、如果本地版本与远程版本有差异，但是又要强制推送可以使用 --force 参数
//    git push --force <remote_name> <branch_name>

// 2、删除主机的分支，可以使用 --delete 参数
//    git push <remote_name> --delete <branch_name>