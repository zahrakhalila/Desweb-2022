function highlight() {
  // body...
  const nodeList = document.querySelectorAll(".blok");

  if (nodeList[0].style.color!="red") {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.backgroundColor = "yellow";
      nodeList[i].style.color = "red";
      nodeList[i].style.fontWeight = "bold"; 
    }
  }
  else {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].removeAttribute("style"); 
    }
  }
}