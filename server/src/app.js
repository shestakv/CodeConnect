require("dotenv").config();
const express = require("express");
const serverConfig = require("./config/serverConfig");
// Импортируем роуты из отдельных файлов
const indexRouter = require("./routes/index.routes");
const PORT = process.env.PORT ?? 3000;


const app = express(); // Создаем экземпляр приложения

//конфигурация
serverConfig(app); // запускаем конфигурацию (мидлварки)

//мaршрутизация
app.use("/api", indexRouter); // протягиваем сюда роуты, не прописывавем их здесь

app.listen(PORT, () => console.log(`listen port ${PORT}`)); // запускаем порт
