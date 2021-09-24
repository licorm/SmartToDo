
$(() => {
  //function to count tasks
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

      });

  };


  //set global variable to grab id from sortable
  let id = "";
  $(function() {
    $(".list-group-task").sortable({
      //connect the lists
      connectWith: ".connectedSortable",
      start: function(mousedown, ui) {
        //grab ID from list
        id = ui.item.children().eq(1)[0].id;
        //show placeholder when task is grabbed
        $(".placeholder").slideDown();
      },
      stop: function(event, ui) {
        //hide placeholder when task is put back in same list
        $(".placeholder").slideUp();
      },

      receive: function(event, ui) {
        //grab new category
        const category = event.target.dataset.category;
        //on receive, send new info to database to chang category using ID
        changeCat({
          "id": id,
          "category": category
        });
        //then recount the tasks
        countTasks();
        //slide up placeholder
        $(".placeholder").slideUp();
      }
    });


  });


});
