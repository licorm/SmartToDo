$(() => {
  $(".userInfo").hide(); // Hides the userInfo Div
  $('.expandButton').click(function () {  // UserIngo form shows , when the plus icon is clicked 
    $('.userInfo').toggle('slow');
  });

  $.get('/tasks', function (data) {
    const countObj = {   
      book: 0,
      movie: 0,
      product: 0,
      restaurant: 0,
      nocat: 0
    }


    for (const obj of data) {
      const taskName = $(`<li class="list-group-item"><div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
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
        countObj.products += 1;
      } else {
        $('#nocat').append(taskName);
        countObj.nocat += 1;
      }
    }
    
// Updates the count of uncompleted tasks 
    $(".resCount").text(countObj.books);
    $(".movieCount").text(countObj.movie);
    $(".booksCount").text(countObj.restaurants);
    $(".productsCount").text(countObj.products);
    $(".nocatCount").text(countObj.nocat);
  });


  $(document).on("click", ".deleteButton", function () {
    const $taskToDelete = $(this).parent();
    $.ajax({
      url: `/delete`,
      data: { taskId: $(this).attr("id") },
      method: 'POST',
      success: function (data) {
        $taskToDelete.hide();
      }
    });
  });

});


