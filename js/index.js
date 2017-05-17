$(document).ready(function(){

  $("#icon").on("click", function(){
    $("img").remove();
    $("h3").remove();
    $("#search").html("<form><input type=text name=query id = what><input type=button value=Search id = find></form>");

    $("#search").on("keypress", "#what", function(e){
     if(e.which === 13){
       e.preventDefault();
            $("#find").click();

        }
});
    $("#search").on("click", "#find", function(){
      var input = document.getElementById("what").value;
      var wiki = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&limit=10&namespace=0&utf8&snippet&format=json&$parse&callback=?";
 $.getJSON(wiki, function(data){
 for (var i=0;i<10;i++){

 $("#lista").append("<a href=" + data[3][i] + ">" +
"<li>" + data[1][i] + "</li>" +
  "<p>" + data[2][i] + "</p>" +
"</a>");

 }
 });

    });

  });

});
