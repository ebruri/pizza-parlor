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

