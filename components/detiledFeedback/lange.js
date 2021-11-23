const langs = [
    {
        lange: 'ru',
        hHeshtags: 'Технологии',
        share: 'Вам понравилось? Поделитесь в ',
        feedBack: 'Связаться с нами',
        request: 'Отправьте нам запрос, чтобы начать общение по вашему проекту.',
        startProject: 'Начать проект'
    },
    {
        lange: 'en',
        hHeshtags: 'Technologies',
        share: 'Did you like it? Share on ',
        feedBack: 'Contact us',
        request: 'Send us a request to start communicating about your project.',
        startProject: 'Start a project'
    }
]
export default function Lange(lange){
    return langs.filter(item => item.lange === lange)
}