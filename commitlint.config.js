/**
 * rule配置说明:：rule由name和配置数组组成
 * 
 * 如：'name:[0, 'always', 72]'，
 * 第一位为level，可选0,1,2，0为disable，1为warning，2为error
 * 第二位为应用与否，可选always|never
 * 第三位该rule的值
 * 
 * 具体配置例子如下：
 */

/**
 * build：编译相关的修改
 * ci: 持续集成修改
 * feat：新功能
 * perf：优化相关
 * update：更新某功能
 * fixbug：修补某功能的bug
 * refactor：重构某个功能
 * optimize: 优化构建工具或运行时性能
 * style：仅样式改动
 * docs：仅文档新增/改动
 * chore：构建过程或辅助工具的变动
 */

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', [
            'upd', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert'
        ]],
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0],
        'scope-case': [0],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
        'header-max-length': [0, 'always', 72]
    }
};


// 这些配置是什么意思？请自行查阅commitlint文档,地址： https://commitlint.js.org/#/reference-rules
