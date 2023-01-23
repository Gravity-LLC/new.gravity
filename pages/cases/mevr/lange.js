const langs = [
    {
        lange: 'ru',
        banText: 'Министерство энергетики и водных ресурсов Республики Таджикистана является центральным органом исполнительной власти, который регулирует деятельность в сферах энергетического комплекса и водных ресурсов.',
        customerHeading: 'Заказчик:',
        customerTexts: 'Министерство энергетики и водных ресурсов Республики Таджикистана является центральным органом исполнительной власти, который регулирует деятельность в сферах энергетического комплекса и водных ресурсов.',
        tasksHeading: 'Задачи, которые были реализованы при создании сайта:',
        tasksTexts: 'Перед нами стояла задача создать информативный и удобный веб-сайт, где пользователь сможет легко и быстро найти нужную ему информацию.',
        implementionHeading: 'При реализации проекта нами были выполнены следующие задачи:',
        implementionTexts: [
            `— Настройка, подбор и наполнение сайта информацией;`,
            `— Разработка функционального дизайна сайта, в соответствии с фирменным стилем; `,
            `— Адаптация сайта под разные форматы пользования `,
            `— Вёрстка сайта в соответствии с утвержденными дизайн-макетами`,
            `— В завершение, презентация сайта и его новых функций представителям банка.`,
        ],
        feetBack: {
            hashtags: [
                { id: 1, link: '/#', tag: 'UX/UI' },
                { id: 2, link: '/#', tag: 'Html ' },
                { id: 3, link: '/#', tag: 'Css' },
                { id: 4, link: '/#', tag: 'JavaScript' },
                { id: 5, link: '/#', tag: 'Laravel' },
                { id: 5, link: '/#', tag: 'MySQL' },
            ],
            color: '#1F65FF'
        }
    },
    {
        lange: 'en',
        banText: 'The Ministry of Energy and Water Resources of the Republic of Tajikistan is the central executive body that regulates activities in the areas of the energy complex and water resources.',
        customerHeading: 'Customer:',
        customerTexts: 'The Ministry of Energy and Water Resources of the Republic of Tajikistan is the central executive body that regulates activities in the areas of the energy complex and water resources.',
        tasksHeading: 'Tasks that were implemented when creating the site:',
        tasksTexts: "We were faced with the task of creating an informative and user-friendly website where the user can easily and quickly find the information he needs.",
        implementionHeading: 'During the implementation of the project, we performed the following tasks:',
        implementionTexts: [
            `— Setting up, selecting and filling the site with information;`,
            `— Development of a functional website design, in accordance with the corporate identity;`,
            `— Adaptation of the site for different formats of use`,
            `— Layout of the site in accordance with the approved design layouts`,
            `— In conclusion, the presentation of the site and its new functions to the representatives of the bank.`,
        ],
        feetBack: {
            hashtags: [
                { id: 1, link: '/#', tag: 'UX/UI' },
                { id: 2, link: '/#', tag: 'Html ' },
                { id: 3, link: '/#', tag: 'Css' },
                { id: 4, link: '/#', tag: 'JavaScript' },
                { id: 5, link: '/#', tag: 'Laravel' },
                { id: 5, link: '/#', tag: 'MySQL' },
            ],
            color: '#1F65FF'
        }
    }
]
export default function Lange(lange) {
    return langs.filter(item => item.lange === lange)
}