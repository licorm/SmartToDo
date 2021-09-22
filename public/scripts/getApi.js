$(() => {



  const $submitForm = $(`
  <form id="addTask" class="createForm" method="POST" action="/">
        <label class="sr-only">Name</label>
        <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Add Something" id="task" name="task">
        <button type="submit" class="btn btn-primary mb-2">Add</button>
        </form>
    `)
   const results = [];

   const $main = $('#submitform');
   $submitForm.appendTo($main);


   $submitForm.on('submit', function(event) {
    event.preventDefault();


    const data = $(this).parents().children().find('#task').serialize();
    let queryText = data.slice(5)
    submitTask({
      "task": queryText
    })
    .then(() => {
      return getTask();
     })
     .then((response) => {
      console.log('response:', response.length)
      let length = response.length - 1
      const task = response[length]
      const $taskName = $(`<li class="list-group-item"><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id=${task.id}>
  ${task.name}
</div>
<i class="far fa-trash-alt"></i></li>`);

  const type = task.category_type;
  console.log(type)
  if(type === 'book'){
    $('#books').append($taskName);
  }else if(type === 'movie'){
    $('#movie').append($taskName )
  }else if(type === 'restaurant'){
    $('#restaurants').append($taskName )
  }else if(type === 'product'){
    $('#products').append($taskName )
  }else if(type === 'nocat'){
    $('#nocat').append($taskName )
  }



    })
  .then(() => {
    $("#addTask").trigger("reset");
  })


  })

})











