

var i = 0;
function change() {
  var  doc = document.getElementById("background");
  var  color = ["black", "blue", "brown", "green","red","yellow","pink","orange","grey","violet","purple"];
  document.body.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 5000);
