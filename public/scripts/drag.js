$(() => {
  $( ".list-group" ).sortable();


  $( ".list-group" ).sortable({
    receive: function( event, ui ) {}
  });


  $(document).on('sortreceive', '.list-group', function (event) {
    console.log(event.target)


  })

  $(function() {
    $( ".list-group" ).sortable({
        connectWith: ".connectedSortable",

        receive: function(event, ui) {
            alert("dropped on = "+this.id); // Where the item is dropped
              alert("sender = "+ui.sender[0].id); // Where it came from
              alert("item = "+ui.item[0].innerHTML); //Which item (or ui.item[0].id)
        }
    }).disableSelection();

  });



})
