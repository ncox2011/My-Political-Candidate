var x = document.getElementsByTagName("ARTICLE")[0];
var y = document.createTextNode("My mission is a bunch of political garb.")
x.appendChild(y);

var section = document.getElementsByTagName("section")[0];
var att = document.createAttribute("class");
att.value = "demo";
section.setAttributeNode(att);
console.log(x);

