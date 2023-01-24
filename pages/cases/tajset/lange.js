const langs = [
    {
        lange: 'ru',
        customerHeading: 'Заказчик:',
        customerTexts: 'TajSet - сеть салонов связи, которая существует уже на рынке с 2007 года.  Компания является официальным дистрибьютором и авторизованным ресселером таких компаний, как Samsung, Apple, Xiaomi, LG и Honor.',
        tasksHeading: 'Задачи, которые были реализованы при создании сайта:',
        tasksTexts: ' Разработать удобную CRM-систему, где сотрудники могут управлять ведением клиентской базы, автоматизацией продаж и работой со сделками.',
        implementionHeading: 'В рамках проекта нами были разработаны следующие модули:',
        implementionTexts: [
            `— Ведение клиентской базы;`,
            `— Работать с лидами;`,
            `— Автоматизация продаж;`,
            `— Создавали шаблоны счетов для быстрой отправки клиентам;`,
            `— Управление проектами в разных режимах;`,
            `— Роли и права доступа;`,
            `— История каждой сделки;`,
            `— Каталог товаров;`,
            `— Складской учет;`,
            `— План продаж и отчеты.`,
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
        customerTexts: 'TajSet is a network of communication salons that has been on the market since 2007. The company is the official distributor and authorized reseller of such companies as Samsung, Apple, Xiaomi, LG and Honor.',
        tasksHeading: 'Tasks that were implemented when creating the site:',
        tasksTexts: '  Develop a user-friendly CRM system where employees can manage customer base management, sales automation, and work with deals.',
        implementionHeading: 'As part of the project, we developed the following modules:',
        implementionTexts: [
            `— Maintenance of the client base;`,
            `— Work with leads;`,
            `— Sales automation;`,
            `— Created invoice templates for quick sending to clients;`,
            `— Project management in different modes;`,
            `— Roles and access rights;`,
            `— History of each transaction;`,
            `— Catalog;`,
            `— Inventory control;`,
            `— Sales plan and reports.`,
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