$(() => {
  let $movieCount = $("#movieUncomplete");
  let $bookCount = $("#bookUncomplete");
  let $restaurantCount = $("#restaurantUncomplete");
  let $productCount = $("#productsUncomplete");
  let $nocatCount = $("#nocatUncomplete");
  // counts uncompleted tasks
  const countTasks = function() {
    getTask()
      .then((data) => {
        let movCount = 0;
        let booCount = 0;
        let restCount = 0;
        let prodCount = 0;
        let nocCount = 0;
        console.log('counting')
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
  //declare the form html and show it on load
  const $submitForm = $(`
  <form id="addTask" class="createForm" method="POST" action="/">
        <label class="sr-only">Name</label>
        <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Add Something" id="task" name="task">
        <div class="icon-container">
    </div>
        <button type="submit" class="submitButton btn btn-primary mb-2">Add</button>
        </form>
    `);

  const $main = $('#submitform');
  $submitForm.appendTo($main);

  //when info is submitted
  $submitForm.on('submit', function(event) {
    event.preventDefault();
    $('input').addClass('loader');

    //take the info, serialize it
    const data = $(this).parents().children().find('#task').serialize();
    let queryText = data.slice(5);
    //send the into to submit tasks and api
    submitTask({
      "task": queryText
    })
      .then(() => {
        return getTask();
      })
      .then((response) => {
        //grab the last taks in the list of returned tasked and append it to the task list
        let length = response.length - 1;
        const task = response[length];

        const $taskName = $(`<li class="list-group-item"><div class="form-check" >
      <input class="form-check-input" type="checkbox"  id="flexCheckDefault" data-id=${task.id} data-type=${task.category_type}>
      ${task.name}
    </div>
    <button class="deleteButton" id ="${task.id}"><i class="far fa-trash-alt"></i></li> </button>`);

        //make sure tasks are appended to correct list
        const type = task.category_type;

        if (type === 'book') {
          $('#books').append($taskName);
        } else if (type === 'movie') {
          $('#movie').append($taskName);
        } else if (type === 'restaurant') {
          $('#restaurants').append($taskName)
        } else if (type === 'product') {
          $('#products').append($taskName);
        } else if (type === 'nocat') {
          $('#nocat').append($taskName);
        }

      })
      .then(() => {
        //reset the form
        $("#addTask").trigger("reset");
        $('input').removeClass('loader');
        countTasks();

      });

  });

});











