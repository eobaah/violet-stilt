$(document).ready(function(){

  $('form.new-item').on('submit', function(){
      var item = $('form .input-new-item');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
      return false;
  });

// click button to go to a new page
  $('form.update-item').on('submit', function(){
        var updateItem = $('form update-item');
        var todo = {item: updateItem.val()};
      $.ajax({
        type: 'POST',
        url: '/edit/' + item,
        success: function(data){
          location.reload();
        }
      });
  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          location.reload();
        }
      });
  });

  // reorder list need to fix
  $("#reorder-up").on('click', function(){
  var $current = $(this).closest('li')
  var $previous = $current.prev('li');
  if($previous.length !== 0){
    $current.insertBefore($previous);
  }
  return false;

  });

  $("#reorder-down").on('click', function(){
    var $current = $(this).closest('li')
    var $next = $current.next('li');
    if($next.length !== 0){
      $current.insertAfter($next);
    }
    return false;
  });
});
