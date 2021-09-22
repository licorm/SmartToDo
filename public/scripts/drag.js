$(() => {





  $(function() {
    $( ".list-group" ).sortable({
        connectWith: ".connectedSortable",
        start: function( event, ui ) {
          console.log($(this).children().find(".form-check-input")[0].dataset)
        },
        receive: function(event, ui) {
          console.log(event.target.dataset.category)
        }
    })

  });



})
