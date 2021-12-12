function Pizza(toppings, size, crust) {
  this.toppings;
  this.size;
  this.crust;
}

$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    let toppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      toppings.push($(this).val())
  });
  console.log(toppings)
});
});