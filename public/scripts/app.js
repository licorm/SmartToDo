$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });
  $.get('/tasks', function(data) {
    console.log(data)
    // console.log(data);
  //   const taskName = $(`<li class="list-group-item"><div class="form-check">
  //   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  //   Shampoo
  // </div>
  // <i class="far fa-trash-alt"></i></li>`);
  for(const obj of data){
    const taskName = $(`<li class="list-group-item"><div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    ${obj.name}
  </div>
  <i class="far fa-trash-alt"></i></li>`);

    const type = obj.category_type;
    if(type === 'books'){
      $('#books').append(taskName);
    }else if(type === 'movie'){
      $('#movie').append(taskName )
    }else if(type === 'restaurants'){
      $('#restaurants').append(taskName )
    }else if(type === 'products'){
      $('#products').append(taskName )
    }


  }



  });
});
