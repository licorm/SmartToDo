$(() => {

    $(".userInfo").hide(); // Hides the userInfo Div

    $('.expandButton').click(function(){  // UserIngo form shows , when the plus icon is clicked 
      $('.userInfo').toggle('slow');
  });



    $.get('/tasks', function(data) {
      for(const obj of data){
        const taskName = $(`<li class="list-group-item"><div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        ${obj.name}
      </div>
      <button class="deleteButton" id ="${obj.id}"><i class="far fa-trash-alt"></i></li> </button>`);
        
        const type = obj.category_type;
        if(type === 'book'){
          $('#books').append(taskName);
        }else if(type === 'movie'){
          $('#movie').append(taskName );
        }else if(type === 'restaurants'){
          $('#restaurants').append(taskName);
        }else if(type === 'product'){
          $('#products').append(taskName);
        }else{
          $('#nocat').append(taskName);
        }
      }
      });

  
$(document).on("click", ".deleteButton", function(){
  const $taskToDelete = $(this).parent();

  $.ajax({
    url: `/delete`,
    data: {taskId: $(this).attr("id")},
    method: 'POST',
    success: function(data) {
      $taskToDelete.hide();
    } 
  });
});

});


