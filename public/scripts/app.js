$(() => {
  //function for fetching tweets from /tweets
  const loadTasks = function() {
    $.ajax("/tasks", { method: "GET" })
      .then(function(data) {


    let bookcount = 0;
    let moviecount = 0;
    let restaurantcount = 0;
    let productcount = 0;

  for(const obj of data){
    console.log(obj)
    //change id so that it's not repeated

  if (obj.completed === false) {
    const taskName = $(`<li class="list-group-item"><div class="form-check" >
    <input class="form-check-input" type="checkbox"  id="flexCheckDefault" data-id=${obj.id}>
    ${obj.name}
  </div>
  <i class="far fa-trash-alt"></i></li>`);
    const type = obj.category_type;
    if(type === 'book'){
      bookcount += 1;
      $('#books').append(taskName);
    }else if(type === 'movie'){
      moviecount += 1;
      $('#movie').append(taskName )
    }else if(type === 'restaurants'){
      restaurantcount += 1;
      $('#restaurants').append(taskName )
    }else if(type === 'products'){
      productcount += 1;
      $('#products').append(taskName )
    }

    $("#movieUncomplete").text(moviecount)
    $("#restaurantUncomplete").text(restaurantcount)
    $("#bookUncomplete").text(bookcount)
    $("#productsUncomplete").text(productcount)
  }


  }
      });
  };

  loadTasks();


  $(document).on('change', '#flexCheckDefault' , function(event) {
    console.log(event.target.dataset.id)
    markComplete({'id': event.target.dataset.id})
    .then(loadTasks())
    $(this).parent().css("color", "red");
    $(this).parent().css("text-decoration", "line-through");
  })



});
