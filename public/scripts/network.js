//easy submit to "/"
const submitTask = function(data) {
  return $.ajax({
    method: "POST",
    url: "/",
    data,
  });
};

//get tasks as an array of objects
const getTask = function() {
  return $.ajax({
    method: "GET",
    url: "/tasks",
  });
};

//send to delete route
const deleteTask = function(data) {
  return $.ajax({
    method: "POST",
    url: "/delete",
    data,
  });
};

//send data to mark complete
const markComplete = function(data) {
  return $.ajax({
    method: "POST",
    url: "/completetask",
    data,
  });
};

//send data to change category
const changeCat = function(data) {
  return $.ajax({
    method: "POST",
    url: "/changeCategory",
    data,
  });
};
