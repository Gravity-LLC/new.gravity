const langs = [
    {
        lange: 'ru',
        banText: 'Osiaf',
        customerHeading: 'Заказчик:',
        customerTexts: 'Институт "Открытое общество" - Фонд Содействия в Таджикистане реализует ряд инициатив по продвижению правосудия, образования, общественного здравоохранения и независимых СМИ.',
        tasksHeading: 'Задачи, которые были реализованы при создании сайта:',
        tasksTexts: 'Задача была разработать сайт в трёх языковых версиях с удобным интерфейсом чтобы пользователям было удобно находить нужную информацию.',
        implementionHeading: 'При реализации проекта нами были выполнены следующие задачи:',
        implementionTexts: [
            `— Индивидуальный подход к созданию сайта на основе брендбука компании и предоставленных фото-материалов;`,
            `— Создание отдельных иконок и добавление информации.`,
            `— Настройка, подбор и наполнение сайта информацией;`,
            `— Верстка и программирование сайта.`,
            `— Удобная навигация сайта`,
            `— Добавление кнопок для перехода на социальные сети института "Открытое общество"`,

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
            color: 'linear-gradient(90deg, #FF4B17 0%, #F68721 100%)' || '#FF4B17'
        }
    },
    {
        lange: 'en',
        banText: 'Osiaf',
        customerHeading: 'Customer:',
        customerTexts: 'The Open Society Institute - Assistance Fund in Tajikistan implements a number of initiatives to promote justice, education, public health and independent media.',
        tasksHeading: 'Tasks that were implemented when creating the site:',
        tasksTexts: 'The task was to develop a website in three language versions with a user-friendly interface so that it would be convenient for users to find the necessary information.',
        Implementationheading: 'During the implementation of the project, we performed the following tasks:',
        Implementationtexts: [
            `— An individual approach to creating a website based on the company's brandbook and provided photo materials;`,
            `— Creating individual icons and adding information.`,
            `— Setting up, selecting and filling the site with information;`,
            `— Layout and programming of the site.`,
            `— Easy site navigation`,
            `— Adding buttons to go to the social networks of the Open Society Institute`,

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
            color: 'linear-gradient(90deg, #FF4B17 0%, #F68721 100%)'
        }
    }
]
export default function Lange(lange) {
    return langs.filter(item => item.lange === lange)
}