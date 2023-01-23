const langs = [
    {
        lange: 'ru',
        banText: 'КАЙНАК',
        customerHeading: 'Заказчик:',
        customerTexts: [
            `Канцтовары Кайнак – офисные товары высокого качества, воплотившие в себе европейскую надежность, точность, удобство и красоту.`,
            `Канцелярия Кайнак – это маркер вашего индивидуального стиля, который расскажет о вас как о профессионале и личности, подчеркнет ваши особенности и характер.`
        ],
        tasksHeading: 'При реализации проекта нами были выполнены следующие задачи:',
        tasks: [
            `— Разработали и одобрили с клиентом дизайн сайта на основе фирменного стиля;`,
            `— Разработали страницу «Товары»: добавили каталог продукции, разбив товары по категориям;`,
            `— Добавили возможность заказа товаров через сайт;`,
            `— Добавили модуль «Корзина», для удобного добавления выбранных товаров;`,
            `— Разработали информационные страницы «О нас», «Контакты»;`,
            `— Добавили link-и на социальные медиа компании, для возможности ознакомления с работами компании и на других площадках;`,
            `— Презентовали сайт клиенту;`,
            `— Обучили сотрудников администрированию сайта.`,
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
            color: '#FBC200'
        }
    },
    {
        lange: 'en',
        banText: 'КАЙНАК',
        customerHeading: 'Customer',
        customerTexts: [
            `Kaynak stationery is a high quality office product that embodies European reliability, accuracy, convenience and beauty.`,
            `Kaynak office is a marker of your individual style, which will tell about you as a professional and personality, emphasize your features and character.`
        ],
        tasksHeading: 'During the implementation of the project, we performed the following tasks:',
        tasks: [
            `— Developed and approved with the client the website design based on the corporate identity;`,
            `— Developed the "Products" page: added a product catalog, dividing products into categories;`,
            `— Added the ability to order goods through the site;`,
            `— Added the "Cart" module for convenient adding of selected products;`,
            `— Developed information pages "About us", "Contacts";`,
            `— Added links to the company's social media, for the opportunity to get acquainted with the work of the company and on other sites;`,
            `— Presented the site to the client;`,
            `— Trained employees on site administration.`,
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
            color: '#FBC200'
        }
    }
]
export default function Lange(lange) {
    return langs.filter(item => item.lange === lange)
}