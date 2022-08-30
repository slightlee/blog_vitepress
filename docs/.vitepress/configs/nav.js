const { getPath } = require('./utils')

module.exports = [
    { text: '首页', link: '/'},
    {
        text: '记录工作',
        items: [
            { text: 'Springboot', link: '/springboot/1' },
            { text: 'SpringCloud', link: '/springcloud/2' },
            { text: 'Docker', link: '/docker/3' }
        ]
    },
    { text: '关于我', link: '/about/' }
]

