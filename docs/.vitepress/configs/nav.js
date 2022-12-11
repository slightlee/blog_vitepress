const { getPath } = require('./utils')

module.exports = [
    // { text: '首页', link: '/'},
    {
        text: 'Java',
        items: [
            { text: '环境配置', link: '/java/configure/Mac使用brew安装JDK' },
            { text: 'Java基础', link: '/java/base/文档测试1' },
            { text: 'Java进阶', link: '/java/advanced/文档测试1' }
        ]
    },
    {
        text: 'Spring',
        items: [
            { text: 'SpringBoot系列', link: '/spring-boot/1' },
            { text: 'SpringCloud系列', link: '/spring-cloud/2' }
        ]
    },
    {
        text: '数据库',
        items: [
            { text: 'MySQL', link: '/mysql/1' },
            { text: 'Redis', link: '/redis/2' },
            { text: 'MongoDB', link: '/mongodb/3' }
        ]
    },
    {
        text: '工具',
        items: [
            { text: 'Git', link: '/git/1' },
            { text: 'Docker', link: '/docker/3' },
            { text: 'K8s', link: '/k8s/2' }
        ]
    },
    { text: '关于我', link: '/about/' }
]

