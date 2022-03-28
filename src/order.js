
function takeOrder(order, deliveryOrders) {
if (deliveryOrders.length < 3) {
  return deliveryOrders.push(order)
}
}


// function refundOrder(order,deliveryOrders) {
// if (deliveryOrders.length) {
//   return deliveryOrders.shift(order)
// }
// }

function refundOrder(order,deliveryOrders) {
  for (var i = 0; i <= deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === order) {
  return deliveryOrders.splice(i,1);
}
}
}

//  siparis numarasina GORE siparis kaldirilmali
// how did you seee we need to check all of them iteration
module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
