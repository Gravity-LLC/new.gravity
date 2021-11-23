const langs = [
    {
        lange: 'ru',
        banText: 'EURODENT',
        customerHeading: 'Заказчик:',
        customerTexts: [
            'Немецкая стоматологическая клиника «Евродент». ',
            'Первоклассная семейная клиника, где используются самые передовые технологии и предоставляется неотложная помощь для всей семьи. ',
        ],
        tasksHeading: 'Поставленные задачи:',
        tasksTexts: [
            '— Продумать и разработать дизайн сайта в корпоративных цветах клиники; ',
            '— Гармонично вписать уникальные фотографии клиники; ',
            '— Добавление некоторых статистических данных клиники, чтобы вызвать доверие клиента; ',
            '— Размещение колонки для того, чтобы клиенты могли оставить отзыв; ',
            '— Размещение последних новостей в сфере стоматологии, чтобы вызвать интерес клиентов. '
        ],
        archHeading: 'Что входит в структуру сайта: ',
        arcTexts: [
            '— Раздел с полным перечнем услуг стоматологии; ',
            '— Детальное описание услуг клиники; ',
            '— Форма записи на прием к врачу или консультацию к специалисту. Можно оставить заявку онлайн и ждать звонка специалиста, что очень удобно для клиентов; ',
            '— Реалистичные изображения, нет кричащих элементов, сдержанная палитра и стильный вид; ',
            '— Страница со специалистами клиники. Очень важно, чтобы был представлен персонал и посетители могли ознакомиться с опытом работы доктора; ',
            '— Информация о клинике позволит повысить доверие потенциальных клиентов прийти к вам; ',
            '— Контактная информация. Телефоны, адрес, как проехать, расположение на карте. ',
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
            color: '#0084E9'
        }   
    },
    {
        lange: 'en',
        banText: 'EURODENT',
        customerHeading: 'Customer:',
        customerTexts: [
            'German dental clinic "Eurodent". ',
            'A first-class family clinic that uses the most advanced technology and provides emergency care for the entire family.',
        ],
        tasksHeading: 'Assigned tasks:',
        tasksTexts: [
            '— Think over and develop a website design in the corporate colors of the clinic;',
            '— To harmoniously fit the unique photographs of the clinic; ',
            '— Adding some statistics of the clinic to build customer confidence; ',
            '— Column placement for customers to leave a review; ',
            '— Posting the latest news in the field of dentistry to generate interest from clients.'
        ],
        archHeading: 'What is included in the site structure:',
        arcTexts: [
            '— Section with a complete list of dental services; ',
            "— Detailed description of the clinic's services;",
            '— An appointment form for an appointment with a doctor or a consultation with a specialist. You can leave an application online and wait for a call from a specialist, which is very convenient for clients;',
            '— Realistic images, no flashy elements, a discreet palette and a stylish look;',
            "— The page with the clinic's specialists. It is very important that staff are presented and visitors can familiarize themselves with the doctor's experience;",
            '— Information about the clinic will increase the confidence of potential clients to come to you;',
            '— Contact Information. Phones, address, how to get there, location on the map.',
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
            color: '#0084E9'
        }   
    }
]
export default function Lange(lange){
    return langs.filter(item => item.lange === lange)
}