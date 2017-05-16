$(document).ready(function(){
  $("img").on("click", function(){
    $("img").remove();
    $("h3").remove();
    $("#search").html("<form><input type=text name=query id = what><input type=button value=Search id = find></form>");
    $("#find").click(function(){
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