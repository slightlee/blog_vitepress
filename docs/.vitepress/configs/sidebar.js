const { getPath } = require('./utils')

module.exports = {
    [getPath('/about/')]: getGuideSidebar(),
    [getPath('/page/')]: getGuideSidebar(),
}

function getGuideSidebar() {
    return [
         {
            text: '文档',
            items: [
                { text: '文档1', link: '/page/1' },
                { text: '文档2', link: '/page/2' },
                { text: '文档3', link: '/page/3' }
            ]
        }
    ]
}

