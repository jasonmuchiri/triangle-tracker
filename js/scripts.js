function check(){
  var length1 = document.getElementById("d1").value;
  var length2 = document.getElementById("d2").value;
  var length3 = document.getElementById("d3").value;
  var sides = ["length1","length2","length3"];
  var sideA = parseInt(length1);
  var sideB = parseInt(length2);
  var sideC = parseInt(length3);
  if (sideA === sideB && sideB === sideC){
    alert("Equilateral Triangle");
  }else if (sideA === sideB && sideA !== sideC && sideA + sideB > sideC){
    alert("Isosceles Triangle");
  }else if (sideA === sideC && sideA !== sideB && sideA + sideC > sideB){
    alert("Isosceles Triangle");
  }else if (sideB === sideC && sideB !== sideA && sideB + sideC > sideA){
    alert("Isosceles Triangle");
  }else if (sideA !== sideB && sideA !== sideC && sideB !== sideC && sideA + sideB > sideC && sideA + sideC > sideB && sideC + sideB > sideA){
    alert("Scalene Triangle");
  }else if (sideA + sideB <= sideC){
    alert("NOT a Triangle");
  }else if (sideA + sideC <= sideB){
    alert("NOT a Triangle");
  }else if (sideB + sideC <= sideA){
    alert("NOT a Triangle");
  }
}
