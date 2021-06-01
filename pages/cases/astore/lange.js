const langs = [
    {
        lange: 'ru',
        banText: 'Astore',
        customerHeading: 'Astore — является официальным партнером продукции Xiaomi в Таджикистане.',
        customerTexts: [
            'При создании сайта для компании ASTORE мы выполнили следующие задачи:',
            '— Разработали и одобрили с клиентом дизайн сайта на основе фирменного стиля;',
            '— Разработали страницу «Товары»: добавили каталог продукции, разбив товары по категориям;',
            '— Добавили возможность заказа товаров через сайт;',
            '— Добавили модуль «Корзина», для удобного добавления выбранных товаров; ',
            '— Разработали информационные страницы «О нас», «Контакты»;',
            '— Добавили link-и на социальные медиа компании, для возможности ознакомления с работами компании и на других площадках;',
            '— Презентовали сайт клиенту;',
            '— Обучили сотрудников администрированию сайта.',
        ],
        
    },
    {
        lange: 'en',
        banText: 'Astore',
        customerHeading: 'Astore is the official partner of Xiaomi products in Tajikistan.',
        customerTexts: [
            'When creating a website for ASTORE, we completed the following tasks:',
            '— Developed and approved with the client a website design based on the corporate identity;',
            '— Developed the "Products" page: added a product catalog, splitting products into categories;',
            '— Added the ability to order goods through the site;',
            '— Added the "Cart" module for easy adding of the selected products; ',
            '— Developed information pages "About us", "Contacts";',
            '— Added a link to the social media of the company, for the opportunity to get acquainted with the work of the company and on other sites;',
            '— We presented the site to the client;',
            '— Trained employees in site administration.',
        ],
    }
]
export default function Lange(lange){
    return langs.filter(item => item.lange === lange)
}