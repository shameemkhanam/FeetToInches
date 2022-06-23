let feet = document.getElementById("feet");
let inches = document.getElementById("inches");

feet.addEventListener("input", function(){
  let f = this.value;
  let i = f*12;
  i = i.toFixed(2);
  inches.value = i;

});

inches.addEventListener("input", function(){
  let i = this.value;
  let f = i/12;
  f = f.toFixed(2);
  feet.value = f;

});