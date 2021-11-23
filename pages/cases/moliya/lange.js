const langs = [
    {
        lange: 'ru',
        banText: 'ПОКУПКА',
        customerHeading: 'Заказчик:',
        customerTexts: 'Интернет магазин «moliya.tj» - это сайт с широким ассортиментом продукции качественных брендовых товаров по самым доступным ценам. ',
        tasksHeading: 'Задачи, которые были реализованы при создании сайта: ',
        tasksTexts: [
            '— Разработка и дизайн сайта на основе фирменного стиля; ',
            '— Разработка страницы «Продукция»: каталога продукции, разбив товары по категориям;  ',
            '— Добавление возможности клиентам заказать продукцию через сайт; ',
            '— Был добавлен модуль «Корзина», для удобного добавления выбранных товаров;  ',
            '— Добавление возможности отправлять рассылку клиентам. Желающие могут оставить свою почту и получать скидки от сайта.'
        ],
        feetBack:{
            hashtags:[
                {id: 1, link: '/#', tag: 'DevOps'},
                {id: 2, link: '/#', tag: 'Kubernetes '},
                {id: 3, link: '/#', tag: 'Bitrix'},
                {id: 4, link: '/#', tag: 'PHP'},
                {id: 5, link: '/#', tag: 'MySQL'},
                {id: 5, link: '/#', tag: 'React'},
                {id: 6, link: '/#', tag: 'Go'},
                {id: 7, link: '/#', tag: 'Git'},
                {id: 8, link: '/#', tag: 'Docker'},
                {id: 9, link: '/#', tag: 'Helm'},
                {id: 10, link: '/', tag: 'nginx'},
                {id: 11, link: '/', tag: 'Aerospike'},
                {id: 12, link: '/', tag: 'PostgreSQL'},
                {id: 13, link: '/', tag: 'Cilium'},
                {id: 14, link: '/#', tag: 'SSR'},
            ],
            color: '#0047AD'
        }   
    },
    {
        lange: 'en',
        banText: 'moliya',
        customerHeading: 'Customer:',
        customerTexts: 'The online store "moliya.tj" is a site with a wide range of quality branded goods at the most affordable prices.',
        tasksHeading: 'Tasks that were implemented when creating the site: ',
        tasksTexts: [
            '— Website development and design based on corporate identity; ',
            '— Development of the "Products" page: a catalog of products, dividing products by categories; ',
            '— Adding the ability for customers to order products through the site;',
            '— The module "Basket" has been added for convenient adding of the selected goods;',
            '— Adding the ability to send newsletters to clients. Those interested can leave their mail and receive discounts from the site.'
        ],
        feetBack:{
            hashtags:[
                {id: 1, link: '/#', tag: 'DevOps'},
                {id: 2, link: '/#', tag: 'Kubernetes '},
                {id: 3, link: '/#', tag: 'Bitrix'},
                {id: 4, link: '/#', tag: 'PHP'},
                {id: 5, link: '/#', tag: 'MySQL'},
                {id: 5, link: '/#', tag: 'React'},
                {id: 6, link: '/#', tag: 'Go'},
                {id: 7, link: '/#', tag: 'Git'},
                {id: 8, link: '/#', tag: 'Docker'},
                {id: 9, link: '/#', tag: 'Helm'},
                {id: 10, link: '/', tag: 'nginx'},
                {id: 11, link: '/', tag: 'Aerospike'},
                {id: 12, link: '/', tag: 'PostgreSQL'},
                {id: 13, link: '/', tag: 'Cilium'},
                {id: 14, link: '/#', tag: 'SSR'},
            ],
            color: '#0047AD'
        }   
    }
]
export default function Lange(lange){
    return langs.filter(item => item.lange === lange)
}