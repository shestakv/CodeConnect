// ./config/serverConfig.js
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors');

const corsConfig = {
  origin: ['http://localhost:5173'],
  credentials: true,
};

// прописываем мидлварки которые используем, чтобы сервер мог обрабатывать запросы от клиента
const serverConfig = (app) => {
  app.use(cors(corsConfig));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
};

module.exports = serverConfig;
