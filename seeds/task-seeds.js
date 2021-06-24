const sequelize = require("../config/connection");
const { Task } = require("../models");

const taskData = [
  {
    chore_id: 1,
    user_id: 1,
    due_date: "2020-06-27",
    complete: false,
  },
  {
    chore_id: 2,
    user_id: 1,
    due_date: "2020-07-04",
    complete: false,
  },
  {
    chore_id: 5,
    user_id: 2,
    due_date: "2020-06-25",
    complete: true,
  },
  {
    chore_id: 3,
    user_id: 3,
    due_date: "2020-06-15",
    complete: false,
  },
];
console.log("hello", Task);
const taskSeeds = () =>
  Task.bulkCreate(taskData, { individualHooks: true, validate: true });

module.exports = taskSeeds;
