const langs = [
    {
        lange: 'ru',
        banText: 'Амонатбонк',
        customerHeading: 'Заказчик:',
        customerTexts: 'Государственный сберегательный банк «Амонатбонк» — народный банк Таджикистана. «Амонатбонк» занимает значительное место в банковской системе страны благодаря количеству своих отделений, и сегодня 23% филиалов банковской системы и 36% его центров банковского обслуживания приходятся на «Амонатбонк». В частности, осуществляют деятельность 143 центра обслуживания «Амонатбонк» в Согдийской области, 40 в ГБАО, 168 в Хатлонской области, 139 в РРП и 56 в Душанбе.',
        tasksHeading: 'Задачи:',
        tasksTexts: 'Перед нами стояла цель создать удобный сайт на трех языках, который предоставляет всю необходимую информацию как для частных лиц, так и для юридических лиц и финансовых организаций.',
        implementionHeading: 'При реализации проекта нами были выполнены следующие задачи:',
        implementionTexts: [
            '— Разработка функционального дизайна сайта согласно корпоративному стилю.',
            '— Верстка и программирование сайта.',
            '— Создание 3 языковых версий сайта (таджикский, русский, английский).',
            '— Внедрение модуля для выдачи официального курса валют, интегрированный с модулем сайта Нацбанка Таджикистана, для быстрой конвертации валют.',
            '— Внедрение разделов для частных лиц, юридических лиц и финансовых организаций.',
            '— Добавление раздела «Филиалы и офисы» для поиска филиалов и офисов банка.',
            '— Добавление кнопок для перехода на социальные сети банка ',
            '— В завершение, презентация сайта и его новых функций представителям банка.'
        ],
        feetBack:{
            hashtags:[
                {id: 1, link: '/#', tag: 'UI/UX'},
                {id: 2, link: '/#', tag: 'Html '},
                {id: 3, link: '/#', tag: 'Css'},
                {id: 4, link: '/#', tag: 'JavaScript'},
                {id: 5, link: '/#', tag: '1CBitrix'},
                {id: 5, link: '/#', tag: 'PHP'},
                {id: 6, link: '/#', tag: 'MySQL'},
            ],
            color: '#08AB68'
        }   
    },
    {
        lange: 'en',
        banText: 'Amonatbonk',
        customerHeading: 'Customer:',
        customerTexts: `State Savings Bank "Amonatbonk" - People's Bank of Tajikistan. "Amonatbonk" occupies a significant place in the banking system of the country due to the number of its branches, and today 23% of the branches of the banking system and 36% of its banking service centers fall on "Amonatbonk". In particular, 143 Amonatbonk service centers operate in Sughd region, 40 in GBAO, 168 in Khatlon region, 139 in RRS and 56 in Dushanbe.`,
        tasksHeading: 'Tasks:',
        tasksTexts: `Our goal was to create a convenient site in three languages, which provides all the necessary information for both individuals and legal entities and financial institutions.`,
        implementionHeading: 'During the implementation of the project, we performed the following tasks:',
        implementionTexts: [
            '— Development of a functional website design according to the corporate style.',
            '— Layout and programming of the site.',
            '— Creation of 3 language versions of the site (Tajik, Russian, English).',
            '— Implementation of a module for issuing the official exchange rate, integrated with the module of the website of the National Bank of Tajikistan, for quick currency conversion.',
            '— Implementation of sections for individuals, legal entities and financial organizations.',
            '— Adding the section "Branches and offices" to search for branches and offices of the bank.',
            "— Adding buttons to go to the bank's social networks ",
            'In conclusion, the presentation of the site and its new features to the representatives of the bank.'
        ],
        feetBack:{
            hashtags:[
                {id: 1, link: '/#', tag: 'UI/UX'},
                {id: 2, link: '/#', tag: 'Html '},
                {id: 3, link: '/#', tag: 'Css'},
                {id: 4, link: '/#', tag: 'JavaScript'},
                {id: 5, link: '/#', tag: '1CBitrix'},
                {id: 5, link: '/#', tag: 'PHP'},
                {id: 6, link: '/#', tag: 'MySQL'},
            ],
            color: '#08AB68'
        }   
    }
]
export default function Lange(lange){
    return langs.filter(item => item.lange === lange)
}