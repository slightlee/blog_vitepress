const { getPath } = require('./utils')



module.exports = {
    [getPath('/xxx/')]: xxx(),
    [getPath('/springboot/')]: sidebar_springboot(),
    [getPath('/spring-cloud/')]: sidebar_spring_cloud(),
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

