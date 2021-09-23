
$(() => {
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



  let id = ""
  $(function() {
    $( ".list-group-task" ).sortable({

        connectWith: ".connectedSortable",
        start: function( mousedown, ui ) {
          id = ui.item.children().eq(1)[0].id
          console.log(id)

        },
        receive: function(event, ui) {
          const category = event.target.dataset.category
          console.log(category)
          changeCat({
            "id": id,
            "category": category
          })
          countTasks();
        }
    })

  });



})
