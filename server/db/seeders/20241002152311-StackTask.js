"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "StackTasks",
      [
        // JavaScript
        {
          description: "Что такое 'hoisting' в JavaScript?",
          stackId: 1,
          answer1: "Переменные поднимаются в верхнюю область видимости.",
          answer2: "Функции поднимаются в верхнюю область видимости.",
          answer3: "Код выполняется до его определения.",
          answer4: "Все вышеперечисленное.",
          trueAnswer: "Все вышеперечисленное."
        },
        {
          description: "Какой метод используется для добавления элемента в конец массива?",
          stackId: 1,
          answer1: "push()",
          answer2: "pop()",
          answer3: "shift()",
          answer4: "unshift()",
          trueAnswer: "push()"
        },
        {
          description: "Что вернёт выражение 'typeof null'?",
          stackId: 1,
          answer1: "null",
          answer2: "undefined",
          answer3: "object",
          answer4: "boolean",
          trueAnswer: "object"
        },
        {
          description: "Как создать объект в JavaScript?",
          stackId: 1,
          answer1: "let obj = {};",
          answer2: "let obj = new Object();",
          answer3: "let obj = Object.create();",
          answer4: "Все вышеперечисленное.",
          trueAnswer: "Все вышеперечисленное."
        },
        {
          description: "Какой метод используется для преобразования JSON-строки в объект?",
          stackId: 1,
          answer1: "JSON.stringify()",
          answer2: "JSON.parse()",
          answer3: "Object.fromJSON()",
          answer4: "Object.parse()",
          trueAnswer: "JSON.parse()"
        },
        {
          description: "Какой метод используется для удаления последнего элемента массива?",
          stackId: 1,
          answer1: "pop()",
          answer2: "push()",
          answer3: "shift()",
          answer4: "unshift()",
          trueAnswer: "pop()"
        },
        {
          description: "Что такое 'closure'?",
          stackId: 1,
          answer1: "Функция, которая имеет доступ к своей внешней функции.",
          answer2: "Функция, которая возвращает другую функцию.",
          answer3: "Функция, которая вызывает себя.",
          answer4: "Все вышеперечисленное.",
          trueAnswer: "Функция, которая имеет доступ к своей внешней функции."
        },
        {
          description: "Какое значение будет возвращено при выполнении 'Boolean(0)'?",
          stackId: 1,
          answer1: "true",
          answer2: "false",
          answer3: "undefined",
          answer4: "null",
          trueAnswer: "false"
        },
        {
          description: "Какой оператор используется для проверки на равенство без приведения типов?",
          stackId: 1,
          answer1: "==",
          answer2: "===",
          answer3: "!=",
          answer4: "!==",
          trueAnswer: "==="
        },
        {
          description: "Что такое 'event delegation'?",
          stackId: 1,
          answer1: "Обработка события на родительском элементе.",
          answer2: "Создание события для каждого элемента.",
          answer3: "Событие, которое делегируется от одного элемента к другому.",
          answer4: "Ничего из вышеперечисленного.",
          trueAnswer: "Обработка события на родительском элементе."
        },
        {
          description: "Как создать функцию в JavaScript?",
          stackId: 1,
          answer1: "function myFunc() {}",
          answer2: "let myFunc = function() {}",
          answer3: "const myFunc = () => {}",
          answer4: "Все вышеперечисленное.",
          trueAnswer: "Все вышеперечисленное."
        },
        {
          description: "Какой метод используется для сортировки массива?",
          stackId: 1,
          answer1: "sort()",
          answer2: "order()",
          answer3: "arrange()",
          answer4: "filter()",
          trueAnswer: "sort()"
        },
        {
          description: "Что такое 'this' в JavaScript?",
          stackId: 1,
          answer1: "Ссылка на текущий объект.",
          answer2: "Указывает на глобальный объект.",
          answer3: "Значение undefined.",
          answer4: "Ничего из вышеперечисленного.",
          trueAnswer: "Ссылка на текущий объект."
        },
        {
          description: "Какой метод позволяет перебрать элементы массива?",
          stackId: 1,
          answer1: "forEach()",
          answer2: "map()",
          answer3: "filter()",
          answer4: "Все вышеперечисленное.",
          trueAnswer: "Все вышеперечисленное."
        },
        {
          description: "Что такое 'promise'?",
          stackId: 1,
          answer1: "Объект для работы с асинхронными операциями.",
          answer2: "Функция для обработки ошибок.",
          answer3: "Тип данных.",
          answer4: "Ничего из вышеперечисленного.",
          trueAnswer: "Объект для работы с асинхронными операциями."
        },
        {
          description: "Как проверить, является ли переменная массивом?",
          stackId: 1,
          answer1: "Array.isArray()",
          answer2: "isArray()",
          answer3: "instanceof Array",
          answer4: "Все вышеперечисленное.",
          trueAnswer: "Все вышеперечисленное."
        },
        {
          description: "Какой метод используется для создания нового массива из существующего?",
          stackId: 1,
          answer1: "map()",
          answer2: "reduce()",
          answer3: "filter()",
          answer4: "Все вышеперечисленное.",
          trueAnswer: "Все вышеперечисленное."
        },
      
        // CSS
        {
          description: "Какой из этих селекторов выбирает все <p> элементы внутри <div>?",
          stackId: 2,
          answer1: "div p",
          answer2: "div > p",
          answer3: "p div",
          answer4: "div + p",
          trueAnswer: "div p"
        },
        {
          description: "Какой из этих свойств CSS задает цвет текста?",
          stackId: 2,
          answer1: "background-color",
          answer2: "color",
          answer3: "text-color",
          answer4: "font-color",
          trueAnswer: "color"
        },
        {
          description: "Какое свойство используется для изменения шрифта элемента?",
          stackId: 2,
          answer1: "font-family",
          answer2: "font-size",
          answer3: "text-font",
          answer4: "font-style",
          trueAnswer: "font-family"
        },
        {
          description: "Какой из этих единиц измерения не является относительным?",
          stackId: 2,
          answer1: "px",
          answer2: "em",
          answer3: "rem",
          answer4: "vw",
          trueAnswer: "px"
        },
        {
          description: "Как задать цвет фона элемента?",
          stackId: 2,
          answer1: "background-color: #fff;",
          answer2: "color: #fff;",
          answer3: "bg-color: #fff;",
          answer4: "background: #fff;",
          trueAnswer: "background-color: #fff;"
        },
        {
          description: "Как задать отступ для элемента?",
          stackId: 2,
          answer1: "padding: 10px;",
          answer2: "margin: 10px;",
          answer3: "spacing: 10px;",
          answer4: "padding-top: 10px;",
          trueAnswer: "padding: 10px;"
        },
        {
          description: "Что делает свойство 'display: none;'?",
          stackId: 2,
          answer1: "Скрывает элемент.",
          answer2: "Убирает элемент из потока документа.",
          answer3: "Оба варианта верны.",
          answer4: "Ничего не делает.",
          trueAnswer: "Оба варианта верны."
        },
        {
          description: "Как изменить цвет текста при наведении на элемент?",
          stackId: 2,
          answer1: "element:hover { color: red; }",
          answer2: "element:active { color: red; }",
          answer3: "element:focus { color: red; }",
          answer4: "element:visited { color: red; }",
          trueAnswer: "element:hover { color: red; }"
        },
        {
          description: "Как задать ширину элемента?",
          stackId: 2,
          answer1: "width: 100px;",
          answer2: "size: 100px;",
          answer3: "height: 100px;",
          answer4: "length: 100px;",
          trueAnswer: "width: 100px;"
        },
        {
          description: "Какой из этих селекторов выбирает все <li> элементы?",
          stackId: 2,
          answer1: "li",
          answer2: ".li",
          answer3: "#li",
          answer4: "li *",
          trueAnswer: "li"
        },
        {
          description: "Как задать изображение фона?",
          stackId: 2,
          answer1: "background-image: url('image.jpg');",
          answer2: "img: url('image.jpg');",
          answer3: "background: 'image.jpg';",
          answer4: "background-url: 'image.jpg';",
          trueAnswer: "background-image: url('image.jpg');"
        },
        {
          description: "Как задать стиль для первого элемента списка?",
          stackId: 2,
          answer1: "li:first-child { }",
          answer2: "li:first { }",
          answer3: "li:first-item { }",
          answer4: "li:first-child-item { }",
          trueAnswer: "li:first-child { }"
        },
        {
          description: "Что делает свойство 'float'?",
          stackId: 2,
          answer1: "Позволяет элементу 'плыть' влево или вправо.",
          answer2: "Изменяет положение элемента.",
          answer3: "Скрывает элемент.",
          answer4: "Выравнивает текст.",
          trueAnswer: "Позволяет элементу 'плыть' влево или вправо."
        },
        {
          description: "Какой из этих значений для свойства 'position' позволяет элементу быть фиксированным?",
          stackId: 2,
          answer1: "absolute",
          answer2: "relative",
          answer3: "fixed",
          answer4: "sticky",
          trueAnswer: "fixed"
        },
        
        // HTML
        {
          description: "Какой атрибут используется для указания адреса ссылки?",
          stackId: 3,
          answer1: "href",
          answer2: "src",
          answer3: "link",
          answer4: "url",
          trueAnswer: "href"
        },
        {
          description: "Какой элемент используется для создания ненумерованного списка?",
          stackId: 3,
          answer1: "<ol>",
          answer2: "<ul>",
          answer3: "<list>",
          answer4: "<item>",
          trueAnswer: "<ul>"
        },
        {
          description: "Какой атрибут используется для указания альтернативного текста изображения?",
          stackId: 3,
          answer1: "alt",
          answer2: "title",
          answer3: "src",
          answer4: "desc",
          trueAnswer: "alt"
        },
        {
          description: "Какой элемент используется для создания заголовка уровня 1?",
          stackId: 3,
          answer1: "<h1>",
          answer2: "<header>",
          answer3: "<title>",
          answer4: "<heading>",
          trueAnswer: "<h1>"
        },
        {
          description: "Какой тег используется для создания формы?",
          stackId: 3,
          answer1: "<form>",
          answer2: "<input>",
          answer3: "<button>",
          answer4: "<textarea>",
          trueAnswer: "<form>"
        },
        {
          description: "Какой элемент используется для создания текста в столбик?",
          stackId: 3,
          answer1: "<p>",
          answer2: "<div>",
          answer3: "<br>",
          answer4: "<span>",
          trueAnswer: "<p>"
        },
        {
          description: "Какой тег используется для вставки стиля?",
          stackId: 3,
          answer1: "<script>",
          answer2: "<style>",
          answer3: "<css>",
          answer4: "<link>",
          trueAnswer: "<style>"
        },
        {
          description: "Какой атрибут используется для указания целевого окна ссылки?",
          stackId: 3,
          answer1: "target",
          answer2: "window",
          answer3: "frame",
          answer4: "href",
          trueAnswer: "target"
        },
        {
          description: "Какой элемент используется для создания текстового поля?",
          stackId: 3,
          answer1: "<input type='text'>",
          answer2: "<textarea>",
          answer3: "<input type='textarea'>",
          answer4: "<field>",
          trueAnswer: "<input type='text'>"
        },
        {
          description: "Какой тег используется для вставки изображения?",
          stackId: 3,
          answer1: "<img>",
          answer2: "<picture>",
          answer3: "<src>",
          answer4: "<image>",
          trueAnswer: "<img>"
        },
        {
          description: "Какой элемент используется для создания раздела на странице?",
          stackId: 3,
          answer1: "<section>",
          answer2: "<div>",
          answer3: "<area>",
          answer4: "<block>",
          trueAnswer: "<section>"
        },
        {
          description: "Какой атрибут используется для ссылки на внешний файл CSS?",
          stackId: 3,
          answer1: "rel",
          answer2: "href",
          answer3: "src",
          answer4: "link",
          trueAnswer: "rel"
        },
        {
          description: "Какой элемент используется для создания таблицы?",
          stackId: 3,
          answer1: "<table>",
          answer2: "<tab>",
          answer3: "<tbody>",
          answer4: "<row>",
          trueAnswer: "<table>"
        },
        {
          description: "Какой атрибут указывает, что элемент является обязательным?",
          stackId: 3,
          answer1: "required",
          answer2: "mandatory",
          answer3: "must",
          answer4: "need",
          trueAnswer: "required"
        },
        {
          description: "Какой элемент используется для создания выпадающего списка?",
          stackId: 3,
          answer1: "<select>",
          answer2: "<dropdown>",
          answer3: "<list>",
          answer4: "<option>",
          trueAnswer: "<select>"
        },
        
        // TypeScript
        {
          description: "Что такое TypeScript?",
          stackId: 4,
          answer1: "Язык программирования",
          answer2: "Суперсет JavaScript",
          answer3: "Язык разметки",
          answer4: "Стилевой язык",
          trueAnswer: "Суперсет JavaScript"
        },
        {
          description: "Какой тип данных не существует в TypeScript?",
          stackId: 4,
          answer1: "number",
          answer2: "string",
          answer3: "boolean",
          answer4: "character",
          trueAnswer: "character"
        },
        {
          description: "Как объявить переменную в TypeScript?",
          stackId: 4,
          answer1: "let x: number;",
          answer2: "var x: number;",
          answer3: "const x: number;",
          answer4: "Все вышеперечисленное.",
          trueAnswer: "Все вышеперечисленное."
        },
        {
          description: "Какой оператор используется для указания типа переменной?",
          stackId: 4,
          answer1: ":",
          answer2: "=",
          answer3: "=>",
          answer4: "=>",
          trueAnswer: ":"
        },
        {
          description: "Что такое интерфейс в TypeScript?",
          stackId: 4,
          answer1: "Описание структуры объекта.",
          answer2: "Класс в TypeScript.",
          answer3: "Функция.",
          answer4: "Переменная.",
          trueAnswer: "Описание структуры объекта."
        },
        {
          description: "Какой тип данных используется для хранения булевых значений?",
          stackId: 4,
          answer1: "boolean",
          answer2: "bool",
          answer3: "int",
          answer4: "string",
          trueAnswer: "boolean"
        },
        {
          description: "Как объявить массив в TypeScript?",
          stackId: 4,
          answer1: "let arr: number[];",
          answer2: "let arr: Array<number>;",
          answer3: "Все вышеперечисленное.",
          answer4: "let arr: [number];",
          trueAnswer: "Все вышеперечисленное."
        },
        {
          description: "Какой синтаксис используется для объявления функции в TypeScript?",
          stackId: 4,
          answer1: "function myFunc() {}",
          answer2: "const myFunc = () => {}",
          answer3: "let myFunc: () => void = () => {}; ",
          answer4: "Все вышеперечисленное.",
          trueAnswer: "Все вышеперечисленное."
        },
        {
          description: "Какой оператор используется для объединения строк?",
          stackId: 4,
          answer1: "+",
          answer2: "concat()",
          answer3: "join()",
          answer4: "add()",
          trueAnswer: "+"
        },
        {
          description: "Что такое 'type alias' в TypeScript?",
          stackId: 4,
          answer1: "Синоним для типа.",
          answer2: "Переменная.",
          answer3: "Класс.",
          answer4: "Интерфейс.",
          trueAnswer: "Синоним для типа."
        },
        {
          description: "Как сделать свойство объекта необязательным?",
          stackId: 4,
          answer1: "С помощью ?",
          answer2: "С помощью *",
          answer3: "С помощью +",
          answer4: "С помощью -",
          trueAnswer: "С помощью ?"
        },
        {
          description: "Что такое 'enum' в TypeScript?",
          stackId: 4,
          answer1: "Перечисление значений.",
          answer2: "Тип данных.",
          answer3: "Класс.",
          answer4: "Функция.",
          trueAnswer: "Перечисление значений."
        },
        {
          description: "Какой оператор используется для обработки исключений?",
          stackId: 4,
          answer1: "try-catch",
          answer2: "throw",
          answer3: "catch",
          answer4: "handle",
          trueAnswer: "try-catch"
        },
        
        // Node.js
        {
          description: "Что такое Node.js?",
          stackId: 5,
          answer1: "Серверная платформа на JavaScript",
          answer2: "Язык программирования",
          answer3: "Библиотека для работы с HTML",
          answer4: "Система управления базами данных",
          trueAnswer: "Серверная платформа на JavaScript"
        },
        {
          description: "Какой модуль используется для работы с файловой системой в Node.js?",
          stackId: 5,
          answer1: "http",
          answer2: "fs",
          answer3: "path",
          answer4: "os",
          trueAnswer: "fs"
        },
        {
          description: "Какой метод используется для создания HTTP-сервера в Node.js?",
          stackId: 5,
          answer1: "http.createServer()",
          answer2: "http.Server()",
          answer3: "createServer()",
          answer4: "new http()",
          trueAnswer: "http.createServer()"
        },
        {
          description: "Какой пакет используется для управления зависимостями?",
          stackId: 5,
          answer1: "npm",
          answer2: "yarn",
          answer3: "bower",
          answer4: "Все вышеперечисленное.",
          trueAnswer: "Все вышеперечисленное."
        },
        {
          description: "Что такое 'callback'?",
          stackId: 5,
          answer1: "Функция, переданная другой функции.",
          answer2: "Метод объекта.",
          answer3: "Промис.",
          answer4: "Класс.",
          trueAnswer: "Функция, переданная другой функции."
        },
        {
          description: "Как создать сервер в Node.js?",
          stackId: 5,
          answer1: "const server = http.createServer();",
          answer2: "const server = new http();",
          answer3: "const server = http.Server();",
          answer4: "Все вышеперечисленное.",
          trueAnswer: "const server = http.createServer();"
        },
        {
          description: "Какой метод используется для чтения файла?",
          stackId: 5,
          answer1: "fs.readFile()",
          answer2: "fs.read()",
          answer3: "fs.open()",
          answer4: "fs.createFile()",
          trueAnswer: "fs.readFile()"
        },
        {
          description: "Какой объект используется для обработки запросов в Node.js?",
          stackId: 5,
          answer1: "request",
          answer2: "response",
          answer3: "http",
          answer4: "server",
          trueAnswer: "request"
        },
        {
          description: "Как установить новый пакет с помощью npm?",
          stackId: 5,
          answer1: "npm install package-name",
          answer2: "npm get package-name",
          answer3: "npm add package-name",
          answer4: "npm new package-name",
          trueAnswer: "npm install package-name"
        },
        {
          description: "Как запустить сервер на определенном порту?",
          stackId: 5,
          answer1: "server.listen(port);",
          answer2: "server.run(port);",
          answer3: "server.start(port);",
          answer4: "server.bind(port);",
          trueAnswer: "server.listen(port);"
        },
        {
          description: "Какой метод используется для обработки ошибок в Node.js?",
          stackId: 5,
          answer1: "try-catch",
          answer2: "catch",
          answer3: "errorHandler()",
          answer4: "onError()",
          trueAnswer: "try-catch"
        },
        {
          description: "Что такое 'middleware'?",
          stackId: 5,
          answer1: "Функция, которая обрабатывает запросы.",
          answer2: "Метод работы с базами данных.",
          answer3: "Класс в Node.js.",
          answer4: "Ничего из вышеперечисленного.",
          trueAnswer: "Функция, которая обрабатывает запросы."
        },
        {
          description: "Как подключить модуль в Node.js?",
          stackId: 5,
          answer1: "const module = require('module-name');",
          answer2: "import module from 'module-name';",
          answer3: "load module from 'module-name';",
          answer4: "include module from 'module-name';",
          trueAnswer: "const module = require('module-name');"
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("StackTasks", null, {});
  },
};
