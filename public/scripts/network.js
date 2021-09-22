const submitTask = function(data) {
  return $.ajax({
    method: "POST",
    url: "/",
    data,
  });
}

function getTask() {
  return $.ajax({
    method: "GET",
    url: "/tasks",
  });
}

const deleteTask = function(data) {
  return $.ajax({
    method: "POST",
    url: "/",
    data,
  });
}

const markComplete = function(data) {
  return $.ajax({
    method: "POST",
    url: "/completetask",
    data,
  });
}
