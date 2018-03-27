class HashNode{
  constructor(key, value){
    this.key = key;
    this.value = value;
  }
}

class HashT {
  constructor(size){
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
    }

  insert(arr){
    for (var i=0; i < arr.length; i++){
      this.buckets[i] = new HashNode(i, arr[i])
    }
  }
}



var arr = ["./img/cat.jpg", "./img/doge.jpg"];
var pics = new HashT(arr.length);
pics.insert(arr);
var count = 0;
var c = 0;


function createPictures(){
  var tabl = "<table>";
  for (i = 0; i < 3; i++){
    tabl += "<tr>";
    for (j = 0; j < 3; j++){
      var x = getRandomInt(0,2);
      var st = "name=" + pics.buckets[x].key;
      var ids = "id='pics" + c + "'";
      tabl += "<td> <img " + ids + " class='pic'"  + st +" height='200' width='300' src='" + pics.buckets[x].value + "'></td>";
      c++;
    }
  tabl += "</tr>";
  }
  tabl += "</table>";
  document.getElementById("container").innerHTML = tabl;
}

function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
window.onload = function() {

    document.getElementById("pics0").addEventListener("click", function(){
      counting(document.getElementById("pics0").getAttribute("name"));
    })
    document.getElementById("pics1").addEventListener("click", function(){
      counting(document.getElementById("pics1").getAttribute("name"));
    })
    document.getElementById("pics2").addEventListener("click", function(){
      counting(document.getElementById("pics2").getAttribute("name"));
    })
    document.getElementById("pics3").addEventListener("click", function(){
      counting(document.getElementById("pics3").getAttribute("name"));
    })
    document.getElementById("pics4").addEventListener("click", function(){
      counting(document.getElementById("pics4").getAttribute("name"));
    })
    document.getElementById("pics5").addEventListener("click", function(){
      counting(document.getElementById("pics5").getAttribute("name"));
    })
    document.getElementById("pics6").addEventListener("click", function(){
      counting(document.getElementById("pics6").getAttribute("name"));
    })
    document.getElementById("pics7").addEventListener("click", function(){
      counting(document.getElementById("pics7").getAttribute("name"));
    })
    document.getElementById("pics8").addEventListener("click", function(){
      counting(document.getElementById("pics8").getAttribute("name"));
    })
}
var temps = 0;
var names = [];
function counting(num){
  names.push(num);
  temps++;
  console.log(names);
  if(temps>=2){
    if (names[0] == names[1]){
      count++;
      temps = 0;
      names =[];
      console.log(names);
      document.getElementById("counts").innerHTML = "<h1>" + count + "</h1>";
    }
    else{
      names = [];
      temps = 0;
    }
  }

}

createPictures();
