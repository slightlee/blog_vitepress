const { getPath } = require('./utils')

module.exports = {
    [getPath('/xxx/')]: xxx(),
    [getPath('/springboot/')]: getGuideSidebar(),
}

function getGuideSidebar() {
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

function xxx() {
    
}

