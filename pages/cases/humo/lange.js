const langs = [
    {
        lange: 'ru',
        banText: 'HUMO',
        customerHeading: 'Заказчик:',
        customerTexts: 'Микрокредитная депозитная организация «Хумо» — одна из лидирующих компаний в отрасли микрофинансирования на рынке Таджикистана. Ею осуществляется доступное финансирование сельского населения, содействие в развитию малого и среднего бизнеса в бедных районах страны. ',
        tasksHeading: 'Задачи:',
        tasksTexts: 'Перед нами стояла задача создать информативный и удобный веб-сайт, на трех языках, который реализовывал бы цели клиентов компании: запрос микрофинансовой поддержки, заполнение заявок на займ, вложение денег в депозиты, поиск филиалов и банкоматов по близости и т.д.',
        implementionHeading: 'При реализации проекта нами были выполнены следующие задачи и шаги:',
        implementionTexts: [
            `— Разработка функционального дизайна сайта, в соответствии с фирменным стилем;`,
            `— Верстка сайта и его программирование;`,
            `— Создали 3 языковые версии сайта;`,
            `— Внедрение модуля для выдачи официального курса валют, автоматизированный с сайтом НБТ;`,
            `— Добавление функции «Онлайн конвертер» для быстрой конвертации валют;`,
            `— Разработка модулей «Кредитный калькулятор» и «Депозитный калькулятор»;`,
            `— Добавление карты с маркерами филиальной сети организации, для максимально удобного нахождения филиалов и банкоматов поблизости с пользователем;`,
            `— Разработка модуля «Поиск по сайту», для быстрого нахождения информации по ключевым словам;`,
            `— Внедрение форм на оформление клиентами заявкок на кредит, депозит, открытие расчётного счета в режиме онлайн;`,
            `— Добавление инструмента для консультирования клиентов на сайте - JivoSite;`,
            `— Презентация сайта безгранично благодарному клиенту`,
        ],
        feetBack: {
            hashtags: [
                { id: 1, link: '/#', tag: 'UI/UX' },
                { id: 2, link: '/#', tag: 'Html ' },
                { id: 3, link: '/#', tag: 'Css' },
                { id: 4, link: '/#', tag: 'JavaScript' },
                { id: 5, link: '/#', tag: '1CBitrix' },
                { id: 5, link: '/#', tag: 'PHP' },
                { id: 6, link: '/#', tag: 'MySQL' },
            ],
            color: '#FF6C2F'
        }
    },
    {
        lange: 'en',
        banText: 'HUMO',
        customerHeading: 'Customer:',
        customerTexts: 'Microcredit deposit organization "Humo" is one of the competitive companies in the field of microfinance in the Tajik market. It provides affordable financing for agriculture, promotes the development of small and medium-sized businesses in poor regions of the country.',
        tasksHeading: 'Tasks:',
        tasksTexts: `Our task was to create an informative and user-friendly website, in three languages, which would realize the goals of the company's clients: requesting microfinance support, filling out loan applications, investing money in deposits, searching for branches and ATMs in the vicinity, etc.`,
        implementionHeading: 'During the implementation of the project, we performed the following tasks and steps:',
        implementionTexts: [
            `— Development of a functional website design, in accordance with the corporate identity;`,
            `— Site layout and programming;`,
            `— Created 3 language versions of the site;`,
            `— Implementation of a module for issuing the official exchange rate, automated with the NBT website;`,
            `— Adding the "Online Converter" function for fast currency conversion;`,
            `— Development of modules "Credit calculator" and "Deposit Calculator";`,
            `— Adding a card with markers of the organization's branch network, for the most convenient location of branches and ATMs near the user;`,
            `— Development of the "Site Search" module, for quickly finding information by keywords;`,
            `— Introduction of forms for clients to apply for a loan, deposit, opening a checking account online;`,
            `— Adding a tool for consulting clients on the site - JivoSite;`,
            `— Presentation of the website to an infinitely grateful client`,
        ],
        feetBack: {
            hashtags: [
                { id: 1, link: '/#', tag: 'UI/UX' },
                { id: 2, link: '/#', tag: 'Html ' },
                { id: 3, link: '/#', tag: 'Css' },
                { id: 4, link: '/#', tag: 'JavaScript' },
                { id: 5, link: '/#', tag: '1CBitrix' },
                { id: 5, link: '/#', tag: 'PHP' },
                { id: 6, link: '/#', tag: 'MySQL' },
            ],
            color: '#FF6C2F'
        }
    },
]
export default function Lange(lange) {
    return langs.filter(item => item.lange === lange)
}