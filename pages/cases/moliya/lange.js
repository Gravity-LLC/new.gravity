const langs = [
    {
        lange: 'ru',
        banText: 'Министерство финансов Республики Таджикистан',
        customerHeading: 'Заказчик:',
        customerTexts: 'Министерство финансов Республики Таджикистан - обеспечивает проведение единой финансовой, бюджетной, налоговой, валютной политики и координирует деятельность в данной сфере иных органов исполнительной власти.',
        tasksHeading: 'Задачи:',
        tasksTexts: [
            `- разработка структуры и дизайн сайта согласно требованиям клиента;`,
            `- добавление информации, а также дополнительных нужных ссылок;`,
            `- выполнение адаптивной верстки сайта: информация корректно отображается на разных экранах и устройствах;`,
        ],
        implementionHeading: 'При реализации проекта нами были выполнены следующие задачи:',
        implementionTexts: [
            `— Разработка функционального дизайна сайта, в соответствии с фирменным стилем;`,
            `— Верстка сайта и его программирование;`,
            `— Создали 3 языковые версии сайта;`,
            `— Внедрение модуля для выдачи официального курса валют, автоматизированный с сайтом НБТ;`,
            `— В завершение, презентация сайта и его новых функций представителям банка.`,

        ],
        feetBack: {
            hashtags: [
                { id: 1, link: '/#', tag: 'UI/UX' },
                { id: 2, link: '/#', tag: 'Html ' },
                { id: 3, link: '/#', tag: 'Css' },
                { id: 4, link: '/#', tag: 'JavaScript' },
                { id: 5, link: '/#', tag: 'Wordpress' },
                { id: 5, link: '/#', tag: 'PHP' },
                { id: 6, link: '/#', tag: 'MySQL' },
            ],
            color: '#0047AD'
        }
    },
    {
        lange: 'en',
        banText: 'Ministry of Finance of the Republic of Tajikistan',
        customerHeading: 'Customer:',
        customerTexts: 'The Ministry of Finance of the Republic of Tajikistan ensures the implementation of a unified financial, budgetary, tax, currency policy and coordinates the activities of other executive authorities in this area.',
        tasksHeading: 'Tasks:',
        tasksTexts:[
            `- development of the structure and design of the website according to the client's requirements;`,
            `- adding information, as well as additional necessary links;`,
            `- performing adaptive site layout: information is displayed correctly on different screens and devices;`,
        ],
        implementionHeading: 'During the implementation of the project, we completed the following tasks:',
        implementionTexts: [
            `— Development of a functional website design, in accordance with the corporate identity;`,
            `— Site layout and programming;`,
            `— Created 3 language versions of the site;`,
            `— Implementation of a module for issuing the official exchange rate, automated with the NBT website;`,
            `— In conclusion, presentation of the website and its new functions to representatives of the bank.`,

        ],
        feetBack: {
            hashtags: [
                { id: 1, link: '/#', tag: 'UI/UX' },
                { id: 2, link: '/#', tag: 'Html ' },
                { id: 3, link: '/#', tag: 'Css' },
                { id: 4, link: '/#', tag: 'JavaScript' },
                { id: 5, link: '/#', tag: 'Wordpress' },
                { id: 5, link: '/#', tag: 'PHP' },
                { id: 6, link: '/#', tag: 'MySQL' },
            ],
            color: '#0047AD'
        }
    }
]
export default function Lange(lange) {
    return langs.filter(item => item.lange === lange)
}