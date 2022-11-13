const { getPath } = require('./utils')



module.exports = {
    [getPath('/xxx/')]: xxx(),
    [getPath('/java/')]: sidebar_java(),
    [getPath('/springboot/')]: sidebar_springboot(),
    [getPath('/spring-cloud/')]: sidebar_spring_cloud(),
}

function sidebar_java() {

    return [
        {
            text: 'Java基础',
            collapsible: true,                     // 折叠
            items: [
                { text: '文档测试1', link: '/java/base/文档测试1' },
                { text: '文档测试2', link: '/java/base/文档测试2' },
                { text: '文档测试3', link: '/java/base/文档测试3' }
            ]
        },
        {
            text: 'Java进阶',
            collapsible: true,
            items: [
                { text: '文档测试1', link: '/java/advanced/文档测试1' },
                { text: '文档测试2', link: '/java/advanced/文档测试2' },
                { text: '文档测试3', link: '/java/advanced/文档测试3' }
            ]
        }
    ]

}

function sidebar_springboot() {
    return [
         {
            text: 'Springboot',
            collapsible: true,                     // 折叠
            items: [
                { text: '文档1', link: '/springboot/1' },
                { text: '文档2', link: '/springboot/2' },
                { text: '文档3', link: '/springboot/3' }
            ]
        }
    ]
}

function sidebar_spring_cloud() {
    return [
        {
            text: 'SpringCloud',
            collapsible: true,                     // 折叠
            items: [
                { text: '文档1', link: '/springcloud/1' },
                { text: '文档2', link: '/spring-cloud/2' },
                { text: '文档3', link: '/spring-cloud/3' }
            ]
        }
    ]
}

function xxx() {
    
}

