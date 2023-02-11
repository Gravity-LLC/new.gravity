import { casesEn, casesRu } from './cases_lange'
const langs = [
    {
        lange: 'ru',
        office: 'Душанбе, пр. Рудаки 93/1',
        navbarNav: [
            { text: "Студия", link: '/studio' },
            { text: "Кейсы", link: '/cases' },
            { text: "Услуги", link: '/services' },
            { text: "Начать проект", link: '/startproject' },
        ],
        homePage: {
            text: 'Создаем цифровые продукты, которые приносят пользу бизнесу наших клиентов.'
        },
        servicesH2: 'Услуги',
        services: [
            {
                id: 1,
                lists: [
                    'Адаптивный веб-дизайн',
                    'UX/UI дизайн',
                    'Дизайны мобильных приложений'
                ]
            },
            {
                id: 2,
                lists: [
                    'Корпоративные сайты, интернет-магазины',
                    'Мобильное приложение',
                    'CRM-системы'
                ]
            },
            {
                id: 3,
                lists: [
                    'Домен и Хостинг',
                    'Техническая поддержка сайтов',
                    'Поддержка контента'
                ]
            },
        ],
        startProject: {
            heading1: 'Офис',
            heading2: 'Начать проект',
            categories: [
                'Проектирование',
                'UX/UI дизайн',
                'Мобильная разработка',
                'Web-разработка',
                'CRM системы',
            ],
            forms: {
                name: 'Имя',
                phone: 'Телефон',
                send: 'Отправить',
            },
            validateText: {
                success: 'Ваша заявка на проект успешно отправленна',
                nameWarn: 'Заполните поле имени',
                phoneWarn: 'Вы ввели недостаточно символов в поле телефон',
                serviceWarn: 'Выберите тип обслуживани'
            }
        },
        studio: {
            aboutUs: () => (
                <>
                    Мы являемся лучшей IT студией Таджикистана. <br /><br />
                    Любим создавать продающие, имиджевые сайты и предлагаем нестандартные решения. Внедряем в ваш бизнес комплекс digital-сервисов: начиная от проектирования и дизайн-концепций до многофункциональных CRM-систем.<br /><br />
                    Помогаем вашему бренду сиять в digital-вселенной, соответствовать международным стандартам и привлекать клиентов вашей мечты. <br /><br />
                    Мы — Gravity Studio.
                </>
            ),
            infoProjects: [
                { num: 12, text: 'лет успешной работы' },
                { num: 11 + '+', text: 'сотрудников в штате' },
                { num: 65, text: 'реализовынных проектов' },
            ],
            achievements: {
                heading: 'Достижения',
                lists: [
                    'Бизнес и сертифицированный партнер компании «1C-Битрикс»',
                    'Лидер продаж продуктов 1C-Битрикс в Таджикистане (2018/2019/2020) гг.',
                ]
            },
            partners: {
                text: 'Нам доверяют'
            },
            technologi: {
                text: 'Используемые технологии',
            }
        },
        cases: {
            headingText: 'Кейсы',
            casesArr: casesRu,
        }
    },
    {
        lange: 'en',
        office: 'Dushanbe, Rudaki Ave. 93/1',
        navbarNav: [
            { text: "Studio", link: '/studio' },
            { text: "Cases", link: '/cases' },
            { text: "Services", link: '/services' },
            { text: "Start a project", link: '/startproject' },
        ],
        homePage: {
            text: 'We create digital products that benefit the business of our clients.'
        },
        servicesH2: 'Services',
        services: [
            {
                id: 1,
                lists: [
                    'Responsive web design',
                    'UX / UI design',
                    'Mobile Application Design'
                ]
            },
            {
                id: 2,
                lists: [
                    'Corporate websites, online stores',
                    'Mobile app',
                    'CRM systems'
                ]
            },
            {
                id: 3,
                lists: [
                    'Domain and Hosting',
                    'Website technical support',
                    'Content support'
                ]
            },
        ],
        startProject: {
            heading1: 'Office',
            heading2: 'Start a project',
            categories: [
                'Design',
                'UX/UI design',
                'Mobile Development',
                'Web Development',
                'CRM systems',
            ],
            forms: {
                name: 'Name',
                phone: 'Telephone',
                send: 'Send',
            },
            validateText: {
                success: 'Your project application has been successfully sent',
                nameWarn: 'Fill in the name field',
                phoneWarn: 'You have entered insufficient characters in the phone field',
                serviceWarn: 'Choose the type of service'
            }
        },
        studio: {
            aboutUs: () => (
                <>
                    We are the best IT studio in Tajikistan. <br /><br />
                    We like to create selling, image sites and offer non-standard solutions. We introduce a set of digital services into your business: from design, from design and design concepts to multifunctional CRM systems.<br /><br />
                    We help your brand shine in the digital universe, coordinate to expand and attract the customers of your dreams. <br /><br />
                    We are Gravity Studio.
                </>
            ),
            infoProjects: [
                { num: 12, text: 'years of successful work' },
                { num: 11 + '+', text: 'staff members' },
                { num: 65 + '+', text: 'completed projects' },
            ],
            achievements: {
                heading: 'Achievements',
                lists: [
                    'Business and certified partner of 1C-Bitrix',
                    'The leader in sales of 1C-Bitrix products in Tajikistan (2018/2019/2020)',
                ]
            },
            partners: {
                text: 'We are trusted'
            },
            technologi: {
                text: 'Technologies used',
            },

        },
        cases: {
            headingText: 'Cases',
            casesArr: casesEn,
        }
    }
]
export default function Lange(lange) {
    return langs.filter(item => item.lange === lange)
}