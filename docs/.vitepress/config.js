const nav = require('./configs/nav')
const sidebar = require('./configs/sidebar')

module.exports = {
    // base: '/docs/',  // # 例如发布到 http://xxxxx.github.io/docs/  那么这里的base就填写 /docs/
    head: [["link", { rel: "icon", type: "image/svg+xml", href: "logo.svg" }]],   // 标签栏logo
    title: "明天的博客",
    description: "明天的博客",
    markdown: {
        theme: 'material-palenight',        //md主题
        lineNumbers: true                   //md 加行号
    },
    lastUpdated: true,                      //显示最近更新时间
    appearance: true,                       //可以选择深浅主题
    // 主题配置
    themeConfig: {
        logo: '/logo.svg',             // logo  
        siteTitle: '明天的博客',     // 自定义文本 , 默认情况下，nav 显示站点引用config.title值的标题
        // siteTitle: false,              // 隐藏站点标题文本
        //右上角图标和链接，icon 可用svg 配置
        socialLinks: [
            { icon: 'github', link: 'https://github.com/slightlee' }
        ],
        // 顶部右上角导航
        nav,
        // 侧边导航
        sidebar,
        //提示文字
        editLink: {
            pattern: 'https://github.com/slightlee/blog_vitepress/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        // lastUpdated: false,
        lastUpdatedText: '上次更新时间',
        outlineTitle: '目录',
        footer: {
            message: false,
            copyright: '© 2022 明天'
        }
    }
}

