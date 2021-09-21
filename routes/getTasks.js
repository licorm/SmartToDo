// The get route to insert tasks to task category from the database

const express = require('express');
const router  = express.Router();

const getTasks = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM tasks ORDER BY id`;
    db.query(query)
      .then(data => {
        const categoties = data.rows;
      //   const groupedTasks = {};
      //   for(const task of categoties){
      //     if(task.category_type === "books"){
      //       if(groupedTasks[task.category_type]){
      //         groupedTasks[task.category_type].push(task);
      //       }else{
      //         groupedTasks[task.category_type] = [task];
      //       }
      //     }else if(task.category_type === "movie"){
      //       if(groupedTasks[task.category_type]){
      //         groupedTasks[task.category_type].push(task);
      //       }else{
      //         groupedTasks[task.category_type] = [task];
      //       }
      //     }else if(task.category_type === "products"){
      //       if(groupedTasks[task.category_type]){
      //         groupedTasks[task.category_type].push(task);
      //       }else{
      //         groupedTasks[task.category_type] = [task];
      //       }
      //     }else if(task.category_type === "restaurants"){
      //       if(groupedTasks[task.category_type]){
      //         groupedTasks[task.category_type].push(task);
      //       }else{
      //         groupedTasks[task.category_type] = [task];
      //       }
      //     }
      // }

        res.json(categoties);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;

};

module.exports = getTasks;
