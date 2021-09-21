$(() => {

  $(".userInfo").hide(); // Hides the errorMessage Div

  $('.expandButton').click(function(){  // UserIngo form slides , when the icon is clicked 
    $('.userInfo').toggle('slow');
});

  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });

  $.get('/tasks', function(data) {
 
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
      $('#movie').append(taskName );
    }else if(type === 'restaurants'){
      $('#restaurants').append(taskName);
    }else if(type === 'products'){
      $('#products').append(taskName);
    }else{
      $('#nocat').append(taskName);
    }
  }
  });
});
