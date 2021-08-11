const langs = [
    {
        lange: 'ru',
        banText: 'Osiaf',
        customerHeading: 'Заказчик:',
        customerTexts: 'Банковская организация «Osiaf» — одна из лидирующих компаний в отрасли микрофинансирования на рынке Таджикистана. Ею осуществляется доступное финансирование сельского населения, содействие в развитию малого и среднего бизнеса в бедных районах страны. ',
        tasksHeading: 'Задачи:',
        tasksTexts: 'Перед нами стояла задача создать информативный и удобный веб-сайт, на трех языках, который реализовывал бы цели клиентов компании: запрос микрофинансовой поддержки, заполнение заявок на займ, вложение денег в депозиты, поиск филиалов и банкоматов по близости и т.д.',
        implementionHeading: 'Реализация',
        implementionTexts: [
            'При реализации проекта нами были выполнены следующие задачи и шаги:',
            '— Разработка функционального дизайна сайта, в соответствии с фирменным стилем;',
            '— Верстка сайта и его программирование;',
            '— Создали 3 языковые версии сайта;',
            '— Внедрение модуля для выдачи официального курса валют, автоматизированный с сайтом НБТ;',
            '— Добавление функции «Онлайн конвертер» для быстрой конвертации валют;',
            '— Разработка модулей «Кредитный калькулятор» и «Депозитный калькулятор»;',
            '— Добавление карты с маркерами филиальной сети организации, для максимально удобного нахождения филиалов и банкоматов поблизости с пользователем;',
            '— Разработка модуля «Поиск по сайту», для быстрого нахождения информации по ключевым словам;',
            '— Внедрение форм на оформление клиентами заявкок на кредит, депозит, открытие расчётного счета в режиме онлайн;',
            '— Добавление инструмента для консультирования клиентов на сайте - JivoSite;',
            '— Презентация сайта безгранично благодарному клиенту',
        ],
    },
    {
        lange: 'en',
        banText: 'Osiaf',
        customerHeading: 'Customer:',
        customerTexts: 'Banking organization "Osiaf" is one of the leading companies in the microfinance industry in the Tajik market. It provides affordable financing for the rural population, assistance in the development of small and medium-sized businesses in the poor regions of the country.',
        tasksHeading: 'Tasks:',
        tasksTexts: "Our task was to create an informative and user-friendly website, in three languages, which would fulfill the goals of the company's clients: requesting microfinance support, filling out loan applications, investing in deposits, searching for branches and ATMs in the vicinity, etc.",
        implementionHeading: 'Implementation',
        implementionTexts: [
            'During the implementation of the project, we completed the following tasks and steps:',
            '— Development of a functional website design in accordance with the corporate identity;',
            '— Site layout and programming;',
            '— Created 3 language versions of the site;',
            '— Implementation of a module for issuing the official exchange rate, automated with the NBT website;',
            '— Adding the function "Online Converter" for quick currency conversion;',
            '— Development of modules "Loan calculator" and "Deposit calculator";',
            "— Adding a card with markers of the organization's branch network, for the most convenient location of branches and ATMs near the user;",
            '— Development of the "Site Search" module to quickly find information by keywords;',
            '— Implementation of forms for the execution of applications by clients for a loan, deposit, opening a current account online;',
            '— Adding a tool for consulting clients on the site - JivoSite;',
            '— Presentation of the site to an infinitely grateful client',
        ],
    }
]
export default function Lange(lange){
    return langs.filter(item => item.lange === lange)
}