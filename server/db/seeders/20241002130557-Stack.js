"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Stacks",
      [
        {
          title: "JavaScript",
          image: "/stackIcon/javascript.png",
        },
        {
          title: "CSS",
          image: "/stackIcon/css.png",
        },
        {
          title: "HTML",
          image: "/stackIcon/html.png",
        },
        {
          title: "TypeScript",
          image: "/stackIcon/typescript.png",
        },
        {
          title: "NodeJS",
          image: "/stackIcon/nodejs.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Stacks", null, {});
  },
};
