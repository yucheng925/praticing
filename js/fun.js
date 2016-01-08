function add() {
  var ullength = document.getElementById("addul").childElementCount;
  var node = document.createElement("LI");
  node.setAttribute("id", "id"+ (ullength+1));
  var textnode = document.createTextNode((ullength+1).toString());
  node.appendChild(textnode);
  document.getElementById("addul").appendChild(node);
}

function remove1() {
  var ullength = document.getElementById("addul").childElementCount;
  var parent = document.getElementById("addul");
  var removeNode = document.getElementById("id" + ullength);
  removeNode.remove();
}

function showTime() {
  var NowDate=new Date();
　var h=NowDate.getHours();
　var m=NowDate.getMinutes();
　var s=NowDate.getSeconds();　
　document.getElementById('showbox').innerHTML = h+'時'+m+'分'+s+'秒';
　setTimeout('showTime()',1000);
}
