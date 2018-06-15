console.log("webpack demo index .88888")
var el =document.getElementById("app");
el.innerHTML = "now chaged inner html abc";

if(module.hot){
    module.hot.accept();
}