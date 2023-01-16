const langs = [
    {
        lange: 'ru',
        banText: 'PBO-EITI Tajikistan',
        customerHeading: 'Заказчик:',
        customerTexts: [
            `PBO-EITI Tajikistan - портал бенефициарного права в рамках инициативы прозрачности добывающих отраслей.`,
            `Общедоступный реестр бенефициарных собственников юридических лиц, которые владеют долей участия по контракту или лицензии на разведку или добычу нефти, газа или минеральных ресурсов.`,
        ],
        tasksHeading: 'Задачи, которые были реализованы при создании сайта:',
        tasksTexts: [
            'Задача была разработать максимально удобный сайт, где с лёгкостью можно найти  информацию о компании и их бенефициарных собственников.',
        ],
        archHeading: 'При реализации проекта нами были выполнены следующие задачи:',
        arcTexts: [
            `— Разработка адаптивного дизайна главной страницы;`,
            `— Наполнение сайта нужной информацией;`,
            `— Добавление иконок для сайта.`,
            `— Адаптация сайта под разные форматы пользования `,
            `— Удобный способ навигации и поиска информации о компании и их бенефициарных собственников`,
            `— Добавлены разные фильтры для удобного поиска собственника `,
        ],
        feetBack: {
            hashtags: [
                { id: 1, link: '/#', tag: 'UI/UX' },
                { id: 2, link: '/#', tag: 'Html ' },
                { id: 3, link: '/#', tag: 'Css' },
                { id: 4, link: '/#', tag: 'JavaScript' },
                { id: 5, link: '/#', tag: 'Laravel' },
                { id: 5, link: '/#', tag: 'PHP' },
                { id: 6, link: '/#', tag: 'MySQL' },
            ],
            color: '#0084E9'
        }
    },
    {
        lange: 'en',
        banText: 'PBO-EITI Tajikistan',
        customerHeading: 'Customer:',
        customerTexts: [
            `PBO-EITI Tajikistan is a beneficial ownership portal within the Extractive Industries Transparency Initiative.`,
            `A publicly available register of beneficial owners of legal entities that own a participation interest under a contract or license for the exploration or production of oil, gas or mineral resources.`,
        ],
        tasksHeading: 'Tasks that were implemented when creating the site:',
        tasksTexts: [
            "The task was to develop the most convenient website where you can easily find information about the company and their beneficial owners.",
        ],
        archHeading: 'During the implementation of the project, we completed the following tasks:',
        arcTexts: [
            `— Development of adaptive design of the main page;`,
            `— Filling the site with the necessary information;`,
            `— Adding icons for the site.`,
            ` — Website adaptation for different usage formats `,
            `— A convenient way to navigate and search for information about the company and their beneficial owners`,
            `— Added different filters for easy search of the owner `,
        ],
        feetBack: {
            hashtags: [
                { id: 1, link: '/#', tag: 'UI/UX' },
                { id: 2, link: '/#', tag: 'Html ' },
                { id: 3, link: '/#', tag: 'Css' },
                { id: 4, link: '/#', tag: 'JavaScript' },
                { id: 5, link: '/#', tag: 'Laravel' },
                { id: 5, link: '/#', tag: 'PHP' },
                { id: 6, link: '/#', tag: 'MySQL' },
            ],
            color: '#0084E9'
        }
    }
]
export default function Lange(lange) {
    return langs.filter(item => item.lange === lange)
}