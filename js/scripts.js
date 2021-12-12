function Pizza(toppings, size, crust) {
  this.toppings = toppings;
  this.size =size;
  this.crust = crust;
}
Pizza.prototype.totalCost = function(){
  let result = 0;
  for (let i = 0; i < this.toppings.length - 1; i++) {
    result += this.toppings[i];
  }
  return result + this.size + this.crust;
}

$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    let toppings = [];
    const size = parseInt($("#size").val());
    const crust = parseInt($("#crust").val());
    $("input:checkbox[name=topping]:checked").each(function(){
      toppings.push(parseInt($(this).val()))
    });
    let newPizza = new Pizza(toppings, size, crust);
    $(".card-footer").show();
    $("#pizza-cost").html(newPizza.totalCost());
    $("#size").val("");
    $("#crust").val("");
    $('input:checkbox').prop('checked', false);
  });
});
