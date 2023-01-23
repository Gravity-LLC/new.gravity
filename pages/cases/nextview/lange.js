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
            color: '#7BBA3E'
        }
    },
    {
        lange: 'en',
        banText: 'NEXT VIEW',
        customerHeading: 'Customer:',
        customerTexts: 'Marketing agency "NextView" is a successful marketing agency in Dushanbe, which offers a wide range of services: from complex creation of a brand from scratch to the organization of large-scale events.',
        tasksHeading: 'A task:',
        tasksTexts: [
            `Agency "NextView", in order to achieve the ideal, lacked only the same bright site, having entered which a potential client had a desire to immediately go to sign a contract for receiving marketing services offered by the company's specialists.`,
            `It was necessary to create a presentable website that would present information about the company's services, brand history and cases of trusting customers.`,
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
            color: '#7BBA3E'
        }
    },
]
export default function Lange(lange) {
    return langs.filter(item => item.lange === lange)
}