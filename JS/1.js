var citiesByState =
{
  Gachibowli: ["-- Select a type --","NorthIndian","SouthIndian","FastFood"],
  Jubileehills: ["-- Select a type --","Northindian","Southindian","Fastfood"]

}
function cityList(value)
{
  if(value.length == 0)
  {
    document.getElementById("s2").innerHTML = "<option></option>";
  }
  else
  {
    var citiesOptions="";
    for(i in citiesByState[value])
    {
      citiesOptions += "<option>"+citiesByState[value][i]+"</option>";
    }
    document.getElementById("s2").innerHTML = citiesOptions;
  }
}