require("dotenv").config();
const express = require("express");
const serverConfig = require("./config/serverConfig");
// Импортируем роуты из отдельных файлов
const indexRouter = require("./routes/index.routes");
const PORT = process.env.PORT ?? 3000;
const path = require("path");

const app = express(); // Создаем экземпляр приложения

const staticFolder = path.join(__dirname, "..", "public", "dist");

//конфигурация
serverConfig(app); // запускаем конфигурацию (мидлварки)

//мaршрутизация
app.use("/api", indexRouter); // протягиваем сюда роуты, не прописывавем их здесь

app.get("*", (req, res) => {
  res.sendFile(path.join(staticFolder, "index.html"));
});

app.listen(PORT, () => console.log(`listen port ${PORT}`)); // запускаем порт
