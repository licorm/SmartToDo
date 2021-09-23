$(() => {




  let id = ""
  $(function() {
    $( ".list-group" ).sortable({

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
        }
    })

  });



})
