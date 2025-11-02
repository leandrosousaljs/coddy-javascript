/* Challenge

Create a function named calculateRestaurantBill that takes a JSON object representing a restaurant order as input. Each key in the object is a dish name, and each value is another object containing:

price (number)
quantity (number)
isSpecialOffer (boolean) 
if true, there's a 20% discount on that dish The function should:

Calculate the total bill
Apply any special offer discounts
Return an object containing:
totalBeforeDiscount
totalDiscount
finalTotal */

function calculateRestaurantBill(order) {
  let totalBeforeDiscount = 0;
  let totalDiscount = 0;

  // Loop through each dish in the order
  for (let dish in order) {
    let itemInfo = order[dish];

    // Calculate total for this dish before discount
    let dishTotal = itemInfo.price * itemInfo.quantity;
    totalBeforeDiscount += dishTotal;

    // If it's a special offer, calculate the discount
    if (itemInfo.isSpecialOffer) {
      let dishDiscount = dishTotal * 0.2; // 20% discount
      totalDiscount += dishDiscount;
    }
  }

  // Calculate final total after all discounts
  let finalTotal = totalBeforeDiscount - totalDiscount;

  return {
    totalBeforeDiscount: totalBeforeDiscount,
    totalDiscount: totalDiscount,
    finalTotal: finalTotal,
  };
}
