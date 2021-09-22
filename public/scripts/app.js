$(() => {

  $(".userInfo").hide(); // Hides the userInfo Div
  $('.expandButton').click(function () {  // UserIngo form shows , when the plus icon is clicked
    $('.userInfo').toggle('slow');
  });

  //function for fetching tweets from /tweets
  const loadTasks = function() {



    $.ajax("/tasks", { method: "GET" })
      .then(function(data) {


    const countObj = {
      books: 0,
      movie: 0,
      products: 0,
      restaurant: 0,
      nocat: 0
      }

  for(const obj of data){
    console.log(obj)
    //change id so that it's not repeated

  if (obj.completed === false) {
    for (const obj of data) {
    const taskName = $(`<li class="list-group-item"><div class="form-check" >
    <input class="form-check-input" type="checkbox"  id="flexCheckDefault" data-id=${obj.id}>
    ${obj.name}
  </div>
  <button class="deleteButton" id ="${obj.id}"><i class="far fa-trash-alt"></i></li> </button>`);
    const type = obj.category_type;


      if (type === 'book') {
        $('#books').append(taskName);
        countObj.book += 1;
      } else if (type === 'movie') {
        $('#movie').append(taskName);
        countObj.movie += 1;
      } else if (type === 'restaurant') {
        $('#restaurants').append(taskName);
        countObj.restaurant += 1;
      } else if (type === 'products') {
        $('#products').append(taskName);
        countObj.products += 1;
      } else {
        $('#nocat').append(taskName);
        countObj.nocat += 1;
      }



// Updates the count of uncompleted tasks

    $("#bookUncomplete").text(countObj.books);
    $("#movieUncomplete").text(countObj.movie);
    $("#restaurantUncomplete").text(countObj.restaurant);
    $("#productsUncomplete").text(countObj.products);
    $("#nocatUncomplete").text(countObj.nocat);

  }
}
    }
   })

}

  loadTasks();


  $(document).on('change', '#flexCheckDefault' , function(event) {
    console.log(event.target.dataset.id)
    markComplete({'id': event.target.dataset.id})
    .then(loadTasks())
    $(this).parent().css("color", "red");
    $(this).parent().css("text-decoration", "line-through");
  })

  $(document).on("click", ".deleteButton", function () {
    const $taskToDelete = $(this).parent();
    $.ajax({
      url: `/delete`,
      data: { taskId: $(this).attr("id") },
      method: 'POST',
      success: function (data) {
        $taskToDelete.hide();
      }
    });
  });


});


