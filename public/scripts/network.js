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
