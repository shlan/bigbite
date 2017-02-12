/*

$(document).ready(function() {
	download();
});

function download(){

	$.getJSON(
        "//reddit.com/r/todayilearned.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 10),
            function (i, post) {
              $(".container").append( '<br>' + post.data.title);
              $(".container").append( '<br><br><img width="200" src="' + post.data.thumbnail + '" />');
              //$(".container").append( '<br>' + post.data.permalink );
              //$(".container").append( '<br>' + post.data.ups );
              //$(".container").append( '<br>' + post.data.downs );
              $(".container").append( '<hr>' );
            }
          )
        }
      );

	/*
      .success(function() { alert("second success"); })
      .error(function() { alert("error"); })
      .complete(function() { alert("complete"); });

    */
/*
}

*/