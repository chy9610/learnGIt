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