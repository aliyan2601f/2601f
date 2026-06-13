

$("#btn").click(function() {
  $("body").toggleClass("dark");
  if($("body").hasClass("dark")) {
    $("#btn").text("Enable Light Mode");}
    else{
        $("#btn").text("Enable Dark Mode");
    }

});