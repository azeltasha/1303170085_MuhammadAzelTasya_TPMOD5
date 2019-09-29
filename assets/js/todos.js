$('#semangat').append(
  "<audio controls autoplay hidden> <source src='../css/semangat.mp3' type='audio/mpeg' /></audio>"
);
// lengkapi jquery untuk menlist hasil dari todolist yang di inputkan


// buatlah jquery untuk menekan tombol akan menjadikan data sebagai list
//  code Here...

$(document).ready(function(){
  //Menambah List
  $("#plus").click(function(){
    var isi= $("#isi").val();
    $("#todos").append('<li><span><i class="fa fa-trash"> </i></span> '+isi+'</li>');
  });
  
  //Mencoret List
  $('ul').on('click', 'li', function() {
    //  code Here...
    if ($(this).css('color') === 'rgb(128, 128, 128)') {
      $(this).css({
        color: 'black',
        textDecoration: 'none'
      });
    } else {
      $(this).css({
        color: 'gray',
        textDecoration: 'line-through'
      });
    }
  });
});
