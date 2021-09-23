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
  // let $bookCount = $("#bookUncomplete");
  // let $movieCount = $("#movieUncomplete");
  // let $restaurantCount = $("#restaurantUncomplete");
  // let $productCount = $("#productsUncomplete");
  // let $nocatCount = $("#nocatUncomplete");

  // function countItems(listID1, listID2, listID3, listID4, listID5){
  //   var ul = document.getElementById(listID1);
  //   console.log(ul)
  //   var i=0, itemCount1 =0;
  //   while(ul.getElementsByTagName('li') [i++]) itemCount1++;
  //   console.log("1:", itemCount1)
  //   $bookCount.val(itemCount1)

  //   var ul = document.getElementById(listID2);
  //   console.log(ul)
  //   var j=0, itemCount2 =0;
  //   console.log(ul.getElementsByTagName('li'))
  //   if (!ul.getElementsByTagName('li').hidden) {
  //     while(ul.getElementsByTagName('li') [j++]) itemCount2++;
  //   }
  //   console.log("moviecount:", ul.getElementsByTagName('li').length)
  //   $movieCount.val(itemCount2)


  //   var ul = document.getElementById(listID3);
  //   console.log(ul)
  //   var k=0, itemCount3 =0;
  //   while(ul.getElementsByTagName('li') [k++]) itemCount3++;
  //   $restaurantCount.val(itemCount3)

  //   var ul = document.getElementById(listID4);
  //   console.log(ul)
  //   var l=0, itemCount4 =0;
  //   while(ul.getElementsByTagName('li') [l++]) itemCount4++;
  //   $productCount.val(itemCount4)

  //   var ul = document.getElementById(listID5);
  //   console.log(ul)
  //   var m=0, itemCount5 =0;
  //   while(ul.getElementsByTagName('li') [m++]) itemCount5++;
  //   $nocatCount.val(itemCount5)

  //   }
  //function for fetching tweets from /tweets
  const loadTasks = function () {



   getTask()
      .then(function (data) {


        for (const obj of data) {
          console.log(obj.completed)
          //change id so that it's not repeated



            const $taskName = $(`<li class="list-group-item"><div class="form-check" >
            <input class="form-check-input stroked" type="checkbox"  id="flexCheckDefault" data-id=${obj.id} data-type=${obj.category_type}">
               ${obj.name}
                </div>
            <button class="deleteButton" id ="${obj.id}"><i class="far fa-trash-alt"></i></li> </button>`);

            const type = obj.category_type;
            if (obj.completed === false) {
              $taskName.toggleClass('stroked');
            }


            if (type === 'book') {
              $('#books').append($taskName);
              countObj.book += 1;
            } else if (type === 'movie') {
              $('#movie').append($taskName);
              countObj.movie += 1;
            } else if (type === 'restaurant') {
              $('#restaurants').append($taskName);
              countObj.restaurant += 1;
            } else if (type === 'product') {
              $('#products').append($taskName);
              countObj.product += 1;
            } else {
              $('#nocat').append($taskName);
              countObj.nocat += 1;
            }


            //countItems("books", "movie", "restaurants", "products", "nocat");






        }

      })
      // .then(() => {

      //   countItems("books", "movie", "restaurants", "products", "nocat");
      // })

  }

  loadTasks()


  $(document).on('change', '#flexCheckDefault', function (event) {
    markComplete({ 'id': event.target.dataset.id })


    $(this).parent().toggleClass('stroked');


  });

$(document).on("click", ".deleteButton", function() {
    const $taskToDelete = $(this).parent();

    deleteTask({ taskId: $(this).attr("id") })
    .then(() => {
      $taskToDelete.hide();

      //countItems("books", "movie", "restaurants", "products", "nocat");


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
