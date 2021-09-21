const submitTask = function(data) {
  return $.ajax({
    method: "POST",
    url: "/",
    data,
  });
}
