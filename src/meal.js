function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem(named,priced,typed) {
  return {name: named, price: priced,type: typed}
}

function addIngredients(ing1,ingredients) {
  if (ingredients.includes(ing1)) {
 return ingredients;
} else {
  return  ingredients.push(ing1)
  }
}

function formatPrice(initialPrice) {
return `$${initialPrice}`
}
    
function decreasePrice(price) {
  return price - (price * 0.1 )
}

function createRecipe(title,ingredients,menuItemType) {
 return { title: title ,ingredients: ingredients,type: menuItemType
 }
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
