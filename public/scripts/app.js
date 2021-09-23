$(() => {

  $(".userInfo").hide(); // Hides the userInfo Div
  $('.expandButton').click(function() { // UserIngo form shows , when the plus icon is clicked
      $('.userInfo').toggle('slow');
  });


  const countObj = {
    book: 0,
    movie: 0,
    product: 0,
    restaurant: 0,
    nocat: 0
  }

  const loadTasks = function () {



   getTask()
      .then(function (data) {


        for (const obj of data) {
          console.log(obj.completed)
          //change id so that it's not repeated



            const $taskName = $(`<li class="list-group-item"><div class="form-check" >
            <input class="form-check-input stroked" type="checkbox"  id="flexCheckDefault" data-id=${obj.id} data-type=${obj.category_type}>
               ${obj.name}
                </div>
            <button class="deleteButton" id ="${obj.id}"><i class="far fa-trash-alt"></i></li> </button>`);

            const type = obj.category_type;
            if (obj.completed === true) {
              $taskName.children().toggleClass('stroked');
              $taskName.children().find(".form-check-input").prop("checked", true);

            }


            if (type === 'book') {
              $('#books').append($taskName);

            } else if (type === 'movie') {
              $('#movie').append($taskName);

            } else if (type === 'restaurant') {
              $('#restaurants').append($taskName);

            } else if (type === 'product') {
              $('#products').append($taskName);

            } else {
              $('#nocat').append($taskName);

            }


            //countItems("books", "movie", "restaurants", "products", "nocat");






        }

      })
      // .then(() => {

      //   countItems("books", "movie", "restaurants", "products", "nocat");
      // })

  }

  loadTasks();

  let $movieCount = $("#movieUncomplete");
  let $bookCount = $("#bookUncomplete");
  let $restaurantCount = $("#restaurantUncomplete");
  let $productCount = $("#productsUncomplete");
  let $nocatCount = $("#nocatUncomplete");


  const countTasks = function() {
    getTask()
    .then((data) => {
      let movCount = 0;
      let booCount = 0;
      let restCount = 0;
      let prodCount = 0;
      let nocCount = 0;
      for (const task of data) {
        const type = task.category_type;
        console.log(type)
        if (task.completed === false) {
          if (type === 'book') {
           booCount += 1;

          } else if (type === 'movie') {
            movCount += 1;

          } else if (type === 'restaurant') {
            restCount += 1;

          } else if (type === 'product') {
            prodCount += 1;

          } else {
            nocCount += 1;

          }
        }
      }
      $movieCount.val(movCount);
      $bookCount.val(booCount);
      $restaurantCount.val(restCount);
      $productCount.val(prodCount);
      $nocatCount.val(nocCount);

    })


  }
  countTasks();



  $(document).on('change', '#flexCheckDefault', function (event) {
    markComplete({ 'id': event.target.dataset.id })
    .then(() => {
      countTasks();
    })


    $(this).parent().toggleClass('stroked');


  });

$(document).on("click", ".deleteButton", function() {
    const $taskToDelete = $(this).parent();

    deleteTask({ taskId: $(this).attr("id") })
    .then(() => {
      $taskToDelete.hide();

      countTasks()


    });
  });

// $(document).on('change', '#flexCheckDefault', function(event) {
//     console.log(event.target.dataset.id)
//     markComplete({
//         'id': event.target.dataset.id
//     })

//     $(this).parent().css("color", "red");
//     $(this).parent().css("text-decoration", "line-through");
// });

});


