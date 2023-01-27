function available() {
  var cities={NorthIndian,SouthIndian,Northindian,Southindian,FastFood,Fastfood};
  var city = document.getElementById("s2").value;
  for(i in cities)
  {
    if(document.getElementById(i).style.display=="block")
    {
      document.getElementById(i).style.display="none";
    }
  }
  document.getElementById(city).style.display="block";
}