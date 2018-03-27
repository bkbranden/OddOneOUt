function createPictures(){
  var tabl = "<table>";
  for (i = 0; i < 3; i++){
    tabl += "<tr>";
    for (j = 0; j < 3; j++){
      tabl += "<td> wfwefwef </td>"
    }
  tabl += "</tr>";
  }
  tabl += "</table>";
  document.getElementById("container").innerHTML = tabl;
}

createPictures();
