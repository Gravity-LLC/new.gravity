const langs = [
    {
        lange: 'ru',
        banText: 'Astore',
        customerHeading: 'Astore — является официальным партнером продукции Xiaomi в Таджикистане.',
        customerTexts: [
            'При создании сайта для компании ASTORE мы выполнили следующие задачи:',
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
                { id: 1, link: '/#', tag: 'UX/UI' },
                { id: 2, link: '/#', tag: 'Html ' },
                { id: 3, link: '/#', tag: 'Css' },
                { id: 4, link: '/#', tag: 'JavaScript' },
                { id: 5, link: '/#', tag: '1СBitrix' },
                { id: 5, link: '/#', tag: 'MySQL' },
            ],
            color: '#FB4C0B'
        }
    },
    {
        lange: 'en',
        banText: 'Astore',
        customerHeading: 'Astore is the official partner of Xiaomi products in Tajikistan.',
        customerTexts: [
            'When creating a website for ASTOR, we completed the following tasks:',
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
                { id: 1, link: '/#', tag: 'UX/UI' },
                { id: 2, link: '/#', tag: 'Html ' },
                { id: 3, link: '/#', tag: 'Css' },
                { id: 4, link: '/#', tag: 'JavaScript' },
                { id: 5, link: '/#', tag: '1СBitrix' },
                { id: 5, link: '/#', tag: 'MySQL' },
            ],
            color: '#FB4C0B'
        }
    }
]
export default function Lange(lange) {
    return langs.filter(item => item.lange === lange)
}