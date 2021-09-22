

$(() => {

  $(".userInfo").hide(); // Hides the userInfo Div
  $('.expandButton').click(function () {  // UserIngo form shows , when the plus icon is clicked
    $('.userInfo').toggle('slow');
  });

  const countObj = {
    book: 0,
    movie: 0,
    product: 0,
    restaurant: 0,
    nocat: 0
  }
  //function for fetching tweets from /tweets
  const loadTasks = function () {


    getTask()
      .then(function (data) {

        for (const obj of data) {
          console.log(obj.completed)
          //change id so that it's not repeated

          if (obj.completed === false) {

            const taskName = $(`<li class="list-group-item"><div class="form-check" >
    <input class="form-check-input" type="checkbox"  id="flexCheckDefault" data-id=${obj.id} data-type=${obj.category_type}>
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
            } else if (type === 'product') {
              $('#products').append(taskName);
              countObj.product += 1;
            } else {
              $('#nocat').append(taskName);
              countObj.nocat += 1;
            }
          // Updates the count of uncompleted tasks
        let $bookCount = $("#bookUncomplete");
        $bookCount.val(0 + countObj.book);
        let $movieCount = $("#movieUncomplete");
        $movieCount.val(0 + countObj.movie)
        let $restaurantCount = $("#restaurantUncomplete");
        $restaurantCount.val(0 + countObj.restaurant)
        let $productCount = $("#productsUncomplete");
        $productCount.val(0 + countObj.product)
        let $nocatCount = $("#nocatUncomplete");
        $nocatCount.val(0 + countObj.nocat)
        console.log($productCount.val())


          }
        }

      })


  }


  loadTasks();




  $(document).on('change', '#flexCheckDefault', function (event) {
    console.log(event.target.dataset.type)

    markComplete({ 'id': event.target.dataset.id })
      .then(() => {
        $(this).parents().eq(1).hide();



      })

    $(this).parent().css("color", "red");
    $(this).parent().css("text-decoration", "line-through");
  })

  $(document).on("click", ".deleteButton", function () {
    const $taskToDelete = $(this).parent();

    deleteTask({ taskId: $(this).attr("id") })
    .then(() => {
      $taskToDelete.hide();

    });
  });


});


