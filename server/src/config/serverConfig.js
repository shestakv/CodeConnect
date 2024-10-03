// ./config/serverConfig.js
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const morgan = require('morgan');

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
  app.use(morgan('dev'));
};

module.exports = serverConfig;
