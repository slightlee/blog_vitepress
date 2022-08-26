const nav = require('./configs/nav')
const sidebar = require('./configs/sidebar')

module.exports = {
    // base: '/docs/',   # 例如发布到 http://xxxxx.github.io/docs/  那么这里的base就填写 /docs/
    title: "demain_lee",
    description: "demain_lee 的博客",
    markdown: {
        theme: 'material-palenight',        //md主题
        lineNumbers: true                   //md 加行号
    },
    lastUpdated: true,                      //显示最近更新时间
    appearance: true,                       //可以选择深浅主题
    // 主题配置
    themeConfig: {
        //右上角图标和链接，icon 可用svg 配置
        socialLinks: [
            { icon: 'github', link: 'https://github.com/slightlee' }
        ],
        // 顶部右上角导航
        nav,
        // 侧边导航
        sidebar,
        // 启用时间线
        editLinks: true,
        //在git上编辑提示文字
        editLinkText: '在 GitHub 上编辑此页',
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        lastUpdated: '上次更新',
        outlineTitle: '目录'
    }
}

