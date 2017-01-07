$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
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

  // update todo list
  // target get the name/id of list item
  // append the item to the url
  // provide user with the location to make edits
  // in the input/location the existing item should be a placeholder

  $('.edit').on('click', function(){
      var item = $(this).prev().text().replace(/ /g, "-");
      $.ajax({
        type: 'PUT',
        url: '/todo/' + item,
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

});
