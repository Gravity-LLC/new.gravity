const langs = [
    {
        lange: 'ru',
        customerHeading: 'Заказчик:',
        customerTexts: '"Шахри бехатар" сайт для проверок  штрафов ПДД. Полезный сайт для предоставления информации об административных правонарушениях граждан посредством специальных технических устройств.',
        tasksHeading: 'Задачи, которые были реализованы при создании сайта:',
        tasksTexts: 'Задача стояла продумать сайт с очень лёгким интерфейсом и удобным поиском штрафов и информации о них.',
        implementionHeading: 'Были реализованы следующие цели по создании сайта:',
        implementionTexts: [
            `- разработка адаптивного дизайн-макета под разные устройства и браузеры`,
            `- удобный и в то же время простой и удобный дизайн сайта`,
            `- добавление иконок и дополнительных плагинов для более удобного поиска информации; `,
            `- тестирование и выпуск готового продукта.`,
        ],
        feetBack: {
            hashtags: [
                { id: 1, link: '/#', tag: 'UI/UX' },
                { id: 2, link: '/#', tag: 'Html ' },
                { id: 3, link: '/#', tag: 'Css' },
                { id: 4, link: '/#', tag: 'JavaScript' },
                { id: 5, link: '/#', tag: 'Go' },
                { id: 6, link: '/#', tag: 'Postgress' },
            ],
            color: '#005395'
        }

    },
    {
        lange: 'en',
        customerHeading: 'Customer:',
        customerTexts: `"Shahri Behatar" is a website for checking traffic fines. A useful website for providing information about administrative offenses of citizens through special technical devices.`,
        tasksHeading: 'Tasks that were implemented when creating the site:',
        tasksTexts: 'The task was to come up with a website with a very easy interface and a convenient search for fines and information about them.',
        implementationheading: 'The following site creation goals were implemented:',
        implementionTexts: [
            `- development of an adaptive design layout for different devices and browsers`,
            `- convenient and at the same time simple and user - friendly website design`,
            `- adding icons and additional plugins for more convenient information search; `,
            `- testing and release of the finished product.`,
        ],
        feetBack: {
            hashtags: [
                { id: 1, link: '/#', tag: 'UI/UX' },
                { id: 2, link: '/#', tag: 'Html ' },
                { id: 3, link: '/#', tag: 'Css' },
                { id: 4, link: '/#', tag: 'JavaScript' },
                { id: 5, link: '/#', tag: 'Go' },
                { id: 6, link: '/#', tag: 'Postgress' },
            ],
            color: '#005395'
        }
    }
]
export default function Lange(lange) {
    return langs.filter(item => item.lange === lange)
}