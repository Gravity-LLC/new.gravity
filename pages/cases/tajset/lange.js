const langs = [
    {
        lange: 'ru',
        customerHeading: 'Заказчик:',
        customerTexts: 'TajSet - сеть салонов связи, которая существует уже на рынке с 2007 года. Компания является официальным дистрибьютором и авторизованным ресселером таких компаний, как Samsung, Apple, Xiaomi, LG и Honor.',
        tasksHeading: 'Задачи, которые были реализованы при создании сайта:',
        tasksTexts: 'Задача была разработать привлекательный и информативный сайт, где покупатели могут заказать смартфоны с доставкой в кратчайшие сроки. ',
        implementionHeading: 'При реализации проекта нами были выполнены следующие задачи:',
        implementionTexts: [
            `— удобная навигация по сайту, где вы можете с легкостью найти Вам нужный товар`,
            `— сайт выполнен согласно брендбуку и стилистике компании;`,
            `— Удобный функционал для выбора и заказа товара на сайте ;`,
            `— настройка, подбор и наполнение сайта информацией;`,
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
            color: '#3B2DBF'
        }
    },
    {
        lange: 'en',
        customerHeading: 'Customer:',
        customerTexts: 'TajSet is a network of communication salons that has been on the market since 2007. The company is an official distributor and authorized reseller of companies such as Samsung, Apple, Xiaomi, LG and Honor.',
        tasksHeading: 'Tasks that were implemented when creating the site:',
        tasksTexts: 'The task was to develop an attractive and informative website where buyers can order smartphones with delivery in the shortest possible time. ',
        Implementationheading: 'During the implementation of the project, we performed the following tasks:',
        Implementationtexts: [
            `— easy site navigation, where you can easily find the right product for you`,
            `— the website is made according to the brandbook and the style of the company;`,
            `— Convenient functionality for selecting and ordering goods on the website ;`,
            `— setting up, selecting and filling the site with information;`,
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
            color: '#3B2DBF'
        }
    }

]
export default function Lange(lange) {
    return langs.filter(item => item.lange === lange)
}