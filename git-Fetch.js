
// git fetch 指令用于从远程获取代码

// 指令格式如下：
// git fetch <remote_short_name>
// 栗子： git fetch origin

// # 远程仓库地址 或者 本地所设置远程仓库链接的简写名称
// # 以上操作会告诉 Git 去获取它有你没有的数据


// 从远程仓库拉取代码之后需要执行合并指令，即 git merge
// git merge <remote_short_name>/<branch_name> 
// 栗子： git merge origin/master