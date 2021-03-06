const langs = [
    {
        lange: 'ru',
        banText: 'NEXT VIEW',
        customerHeading: 'Заказчик:',
        customerTexts: 'Маркетинговое агентство "NextView" — это преуспевающее маркетинговое агентство города Душанбе, которое предлагает широкий спектр услуг: от комплексного создания бренда с нуля до организации масштабных ивентов.',
        tasksHeading: 'Задача:',
        tasksTexts: [
            'Агентству "NextView", для достижение идеала, не хватало лишь такого же яркого сайта, зайдя на который у потенциального клиента возникло желание немедленно отправится подписывать контракт на получение маркетинговых услуг, предлагаемых специалистами компании.',
            'Необходимо было создать презентабельный сайт, в котором будет преподнесена информация об услугах компании, истории бренда и кейсов о доверяющих  клиентах.'
        ],
        implementionHeading: 'Реализация:',
        implementionTexts: [
            'Работая над проектом, мы проделали следующее:',
            '— Разработали дизайн сайта, взяв за основу фирменный стиль бренда и предпочтения клиента;',
            '— Разместили на главной странице баннер с информацией об этапах роста и расширения компании;',
            '— Разработали страницу «Услуги» компании, с возможностью узнать о каждой из услуг «подробно», разработали дизайн иконок для каждой услуги;',
            '— Добавили link-и на социальные медиа компании, для возможности клиентов ознакомиться с работами агенства и на других площадках;',
            '— Разработали страницу «Портфолио», разбив его по годам;',
            '— Добавили карту с маркером местонахождения офиса агентства;',
            '— Разработали информационные страницы «О нас» и «Контакты»;',
            '— Провели презентацию сайта клиенту и получили одобрение.',
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
            color: '#7BBA3E'
        }   
    },
    {
        lange: 'en',
        banText: 'NEXT VIEW',
        customerHeading: 'Customer:',
        customerTexts: 'Marketing agency "NextView" is a successful marketing agency in the city of Dushanbe, which offers a wide range of services: from complex brand creation from scratch to organizing large-scale events.',
        tasksHeading: 'A task:',
        tasksTexts: [
            `The agency "NextView", to achieve the ideal, lacked only the same bright site, visiting which a potential client had a desire to immediately go to sign a contract for marketing services offered by the company's specialists.`,
            "It was necessary to create a presentable website, which will present information about the company's services, brand history and cases of trusting customers.",
        ],
        implementionHeading: 'Implementation:',
        implementionTexts: [
            'While working on the project, we did the following:',
            "— We developed a website design based on the corporate identity of the brand and the client's preferences;",
            '— Placed a banner on the main page with information about the stages of growth and expansion of the company;',
            '— Developed a page "Services" of the company, with the ability to learn about each of the services "in detail", developed an icon design for each service;',
            "— Added a link to the company's social media, so that customers can get acquainted with the agency's work on other sites;",
            '— Developed a "Portfolio" page, breaking it down by year;',
            "— Added a map with a marker of the location of the agency's office;",
            '— Developed information pages "About us" and "Contacts";',
            '— Conducted a presentation of the site to the client and received approval.',
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
            color: '#7BBA3E'
        }   
    },
]
export default function Lange(lange){
    return langs.filter(item => item.lange === lange)
}