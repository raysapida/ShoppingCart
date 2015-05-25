$(document).ready(function() {
  $( "#item" ).submit(function( event ) {
    var x = $("input").val();
    var del_btn = "<button class='fa fa-trash-o'></button>";
    var check_btn = "<button class='fa fa-check-circle-o'></button>";
    $('.list').append("<li>"+x+del_btn+check_btn+"</li>");
    event.preventDefault();
  });
  $('.list').on('click', '.fa-trash-o', function(){
    $(this).parent().remove();
  });
  $('.list').on('click', '.fa-times', function(){
    alert('times has been clicked');
  });
  $('.list').on('click', '.fa-check-circle-o', function(){
    alert('check has been clicked');
  });
});
