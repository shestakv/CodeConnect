"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstname: "Арсен",
          surname: "Аванесян",
          patronymic: "Игоревич",
          phone: 89117755666,
          email: "1@1.ru",
          location: "Russia",
          workExperience:
            "3 годв в разработке веб-приложений (JavaScript, React)",
          education:
            "Санкт-Петербургский академический университет, факультет менеджмента",
          avatar: "/images/arsen.jpg",
          bio: "Бэкенд-разработчик с опытом работы в крупных проектах.",
          password: await bcrypt.hash("123", 8),
        },
        {
          firstname: "Владимир",
          surname: "Шестак",
          patronymic: "Алексеевич",
          phone: 89115557788,
          email: "shestakVova@gmail.com",
          location: "Russia",
          workExperience:
            "3 года в разработке веб-приложений (JavaScript, React)",
          education:
            "Санкт-Петербургский государственный университет, Факультет информатики",
          avatar: "/images/vova.jpg",
          bio: "Бэкенд-разработчик с опытом создания сложных веб-приложений.",
          password: await bcrypt.hash("123", 8),
        },
        {
          firstname: "Дмитрий",
          surname: "Фёдоров",
          patronymic: "Сергеевич",
          phone: 89119997755,
          email: "FedorovDimasik@gmail.com",
          location: "Russia",
          workExperience: "3 года в фронтенд-разработке (Vue.js, HTML, CSS)",
          education:
            "Новосибирский государственный университет, Факультет математики",
          avatar: "/images/dima.jpeg",
          bio: "Фронтенд-разработчик с опытом работы в различных проектах.",
          password: await bcrypt.hash("123", 8),
        },
        {
          firstname: "Иван",
          surname: "Иванов",
          patronymic: "Иванович",
          phone: "79161234567",
          email: "ivan.ivanov@gmail.com",
          location: "Россия",
          workExperience:
            "5 лет в разработке веб-приложений (JavaScript, React)",
          education:
            "Московский государственный университет, Факультет информатики",
          bio: "Фронтенд-разработчик с опытом создания интерактивных интерфейсов.",
          password: await bcrypt.hash("123", 8),
          avatar: "/images/ivan.jpeg",
        },
        {
          firstname: "Мария",
          surname: "Петрова",
          patronymic: "Сергеевна",
          phone: "79261234568",
          email: "maria.petrova@gmail.com",
          location: "Россия",
          workExperience: "3 года в разработке бэкенда (Node.js, Express)",
          education:
            "Санкт-Петербургский государственный университет, Факультет информатики",
          bio: "Бэкенд-разработчик с акцентом на создание RESTful API.",
          avatar: "/images/maria.jpeg",
          password: await bcrypt.hash("123", 8),
        },
        {
          firstname: "Сергей",
          surname: "Сидоров",
          patronymic: "Александрович",
          phone: "79361234569",
          email: "sergey.sidorov@gmail.com",
          location: "Россия",
          workExperience: "4 года в разработке на Python (Django, Flask)",
          education: "Высшая школа экономики, Факультет компьютерных наук",
          bio: "Бэкенд-разработчик с опытом создания сложных веб-приложений.",
          avatar: "/images/sergei.jpeg",
          password: await bcrypt.hash("123", 8),
        },
        {
          firstname: "Елена",
          surname: "Кузнецова",
          patronymic: "Викторовна",
          phone: "79461234570",
          email: "elena.kuznetsova@gmail.com",
          location: "Россия",
          workExperience: "2 года в фронтенд-разработке (Vue.js, HTML, CSS)",
          education:
            "Российская академия народного хозяйства и государственной службы",
          bio: "Фронтенд-разработчик с акцентом на UX/UI.",
          avatar: "/images/elena.jpeg",
          password: await bcrypt.hash("123", 8),
        },
        {
          firstname: "Дмитрий",
          surname: "Федоров",
          patronymic: "Дмитриевич",
          phone: "79561234571",
          email: "dmitry.fedorov@gmail.com",
          location: "Россия",
          workExperience:
            "6 лет в разработке веб-приложений (Angular, TypeScript)",
          education:
            "Московский государственный технический университет имени Баумана",
          bio: "Фронтенд-разработчик с опытом создания сложных интерфейсов.",
          avatar: "/images/dmitrii.png",
          password: await bcrypt.hash("123", 8),
        },
        {
          firstname: "Анастасия",
          surname: "Семёнова",
          patronymic: "Александровна",
          phone: "79661234572",
          email: "anastasia.semenova@gmail.com",
          location: "Россия",
          workExperience: "3 года в бэкенд-разработке (Ruby on Rails)",
          education: "Санкт-Петербургская художественная академия",
          bio: "Бэкенд-разработчик с опытом работы в стартапах.",
          avatar: "/images/nastya.jpg",
          password: await bcrypt.hash("123", 8),
        },
        {
          firstname: "Олег",
          surname: "Тимофеев",
          patronymic: "Иванович",
          phone: "79761234573",
          email: "oleg.timofeev@gmail.com",
          location: "Россия",
          workExperience: "8 лет в разработке (Java, Spring)",
          education:
            "Новосибирский государственный университет, Факультет математики",
          bio: "Бэкенд-разработчик с опытом работы в крупных проектах.",
          avatar: "/images/oleg.jpeg",
          password: await bcrypt.hash("123", 8),
        },
        {
          firstname: "Татьяна",
          surname: "Соколова",
          patronymic: "Петровна",
          phone: "79861234574",
          email: "tatiana.sokolova@gmail.com",
          location: "Россия",
          workExperience: "4 года в веб-разработке (HTML, CSS, JavaScript)",
          education:
            "Московский государственный университет, Факультет журналистики",
          bio: "Фронтенд-разработчик с опытом работы в различных проектах.",
          password: await bcrypt.hash("123", 8),
          avatar: "/images/defAvatar.png",
        },
        {
          firstname: "Николай",
          surname: "Морозов",
          patronymic: "Сергеевич",
          phone: "79961234575",
          email: "nikolai.morozov@gmail.com",
          location: "Россия",
          workExperience: "10 лет в разработке (PHP, Laravel)",
          education: "Московский государственный строительный университет",
          bio: "Бэкенд-разработчик с опытом оптимизации производительности приложений.",
          password: await bcrypt.hash("123", 8),
          avatar: "/images/defAvatar.png",
        },
        {
          firstname: "Александр",
          surname: "Ковалёв",
          patronymic: "Дмитриевич",
          phone: "79161234576",
          email: "alexander.kovalev@gmail.com",
          location: "Россия",
          workExperience: "5 лет в разработке на .NET",
          education: "Казанский федеральный университет, Факультет информатики",
          bio: "Фронтенд и бэкенд-разработчик с полным циклом разработки приложений.",
          password: await bcrypt.hash("123", 8),
          avatar: "/images/defAvatar.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
