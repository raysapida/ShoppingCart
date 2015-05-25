$(document).ready(function() {
  $( "#item" ).submit(function( event ) {
    var x = $("input").val();
    var del_btn = "<button type='submit' class='fa fa-trash-o'></button>";
    var check_btn = "<button type='submit' class='fa fa-check-circle-o'></button>";
    $('.list').append("<li>"+x+del_btn+check_btn+"</li>");
    event.preventDefault();
  });
});
