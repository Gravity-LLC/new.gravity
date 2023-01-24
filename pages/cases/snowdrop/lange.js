const langs = [
    {
        lange: 'ru',
        banText: 'Snowdrop',
        customerHeading: 'Заказчик:',
        customerTexts: 'Snowdrop - сайт для любителей почитать интересные, полезные книги и статьи в очень удобном интерфейсе. Здесь еще вы можете найти книги для детей с захватывающими и интересными сюжетами.',
        tasksHeading: 'Задачи, которые были реализованы при создании сайта:',
        tasksTexts: 'Задача была создать эффективный и удобный интерфейс для читателей сайта, тем самым впечатлить их лёгкостью поиска нужной книги и статьи для чтения.',
        implementionHeading: 'При реализации проекта нами были выполнены следующие задачи:',
        implementionTexts: [
            `— Разработка функционального дизайна сайта, в соответствии с фирменным стилем;`,
            `— Вёрстка сайта в соответствии с утвержденными дизайн-макетами`,
            `— Удобный формат чтения`,
            `— Разработка и адаптивная верстка сайта ;`,
            `— Настройка, подбор и наполнение сайта информацией;`,
            `— Разработка возможности регистрации на сайте и добавление функционала разного формата (каталог и т.д.)`,

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
            color: '#009875'
        }
    },
    {
        lange: 'en',
        banText: 'Snowdrop',
        customerHeading: 'Customer:',
        customerTexts: 'Snowdrop is a website for fans of reading interesting, useful books and articles in a very user-friendly interface. Here you can also find books for children with exciting and interesting stories.',
        tasksHeading: 'Tasks that were implemented when creating the site:',
        tasksTexts: 'The task was to create an effective and user-friendly interface for the readers of the site, thereby impressing them with the ease of finding the right book and article to read.',
        implementionHeading: 'During the implementation of the project, we performed the following tasks:',
        implementionTexts: [
            `— Development of a functional website design, in accordance with the corporate identity;`,
            `— Layout of the site in accordance with the approved design layouts`,
            `— Convenient reading format`,
            `— Development and adaptive layout of the site ;`,
            `— Setting up, selecting and filling the site with information;`,
            `— Development of the possibility of registering on the site and adding functionality of different formats (catalog, etc.)`,

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
            color: '#009875'
        }
    }
]
export default function Lange(lange) {
    return langs.filter(item => item.lange === lange)
}