const langs = [
    {
        lange: 'ru',
        targetHeading: 'Поставленная цель:',
        targetTexts: [
            'Разработать сайт-галерею, который раскрывает всё богатство мозаичного искусства Таджикистана.',
            'Данный сайт-галерея позволяет продемонстрировать людям потенциал художников-мозаичников из нашего солнечного Таджикистана.',
            'Спонсором выступает культурный центр «Бактрия», которая была основана французской неправительственной организацией ACTED в 2001 году для решения проблем доступа к культуре, информации и образованию в Таджикистане.'
        ],
        tasksHeading: 'Задачи, которые были реализованы: ',
        tasksTexts: [
            '— разработали стиль и дизайн сайта таким образом, чтобы каждый посетитель мог почувствовать себя на реальной выставке; ',
            '— добавили избранные работы из мозаичного искусства Таджикистана; ',
            '— разработали информационные страницы для подробного ознакомления с данным видом искусства. '
        ],
        developmentTehn: 'В разработке сайта были задействованы фанаты своего дела, и результат говорит сам за себя. Надеемся на достойную оценку наших усилий.',
    },
    {
        lange: 'en',
        targetHeading: 'The stated goal:',
        targetTexts: [
            'To develop a gallery site that reveals all the richness of the mosaic art of Tajikistan.',
            'This gallery site allows you to demonstrate to people the potential of mosaic artists from our sunny Tajikistan.',
            'The sponsor is the cultural center "Bactria", which was founded by the French non-governmental organization ACTED in 2001 to solve the problems of access to culture, information and education in Tajikistan.'
        ],
        tasksHeading: 'Tasks that have been completed:',
        tasksTexts: [
            '- developed the style and design of the site in such a way that each visitor could feel like at a real exhibition;',
            '- added selected works from the mosaic art of Tajikistan;',
            '- developed information pages for detailed acquaintance with this type of art. '
        ],
        developmentTehn: 'Fans of their craft were involved in the development of the site, and the result speaks for itself. We hope for a worthy assessment of our efforts.',
    }
]
export default function Lange(lange){
    return langs.filter(item => item.lange === lange)
}