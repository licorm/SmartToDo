Smart To Do List
=========
A web app that auto categorizes tasks input by user into one of 5 categories. Type in the task that you want to accomplish and watch it appear in books, restaurants, products, movies or no category. If you want to choose the category yourself, just add read, watch, buy or eat to your task input. Wrong category? Just drag and drop the task into the desired category! Tick items off the list or delete a task you no longer want to accomplish. Changes are saved even after page refresh.

## Media
!["Main page"](https://github.com/licorm/SmartToDo/blob/master/docs/searchopen.png)
!["Having both the search and categories open"](https://github.com/licorm/SmartToDo/blob/master/docs/fullView.png)
!["Being able to drag from on category to another"](https://github.com/licorm/SmartToDo/blob/master/docs/drag.png)
!["After effects of  dragging"](https://github.com/licorm/SmartToDo/blob/master/docs/afterDrag.png)
!["Crossing out finished tasks"](https://github.com/licorm/SmartToDo/blob/master/docs/Screenshot%20from%202021-09-23%2018-19-26.png)

## Getting Started

1. Clone the project into your local directory
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Axios 
- Body-Parser 
- Chalk 
- Cookie-session 
- dotenv 
- ejs
- ejs
- express
- jquery
- jsdom
- morgan
- node-sass-middleware
- pg-native
- requirejs


