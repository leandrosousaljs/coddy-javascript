/* Challenge

Create a string enum named OrderStatus with four members:

Pending initialized to "Pending"
Shipped initialized to "Shipped"
Delivered initialized to "Delivered"
Cancelled initialized to "Cancelled"
Create an interface named Order with the following properties:

id of type number
customerName of type string
status of type OrderStatus
Create three order objects using the Order interface:

order1 with id 1001, customerName "Alice Johnson", and status OrderStatus.Pending
order2 with id 1002, customerName "Bob Smith", and status OrderStatus.Shipped
order3 with id 1003, customerName "Carol Davis", and status OrderStatus.Delivered
Create a function named displayOrderInfo that takes one parameter:

order of type Order
The function should print a message in the format: "Order #[id] for [customerName] is [status]" and have a return type of void.

Print the following outputs:

Call displayOrderInfo with order1
Call displayOrderInfo with order2
Call displayOrderInfo with order3
Print the value of OrderStatus.Cancelled
Print the value of order2.status */

// TODO: Write your code here
// Create the OrderStatus enum, Order interface, order objects, and displayOrderInfo function
enum OrderStatus {
  Pending = 'Pending',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled',
}

interface Order {
  id: number;
  customerName: string;
  status: OrderStatus;
}

const order1: Order = {
  id: 1001,
  customerName: 'Alice Johnson',
  status: OrderStatus.Pending,
};

const order2: Order = {
  id: 1002,
  customerName: 'Bob Smith',
  status: OrderStatus.Shipped,
};

const order3: Order = {
  id: 1003,
  customerName: 'Carol Davis',
  status: OrderStatus.Delivered,
};

const displayOrderInfo = (order: Order): void =>
  console.log(`Order #${order.id} for ${order.customerName} is ${order.status}`);
// Print the required outputs
displayOrderInfo(order1);
displayOrderInfo(order2);
displayOrderInfo(order3);
console.log(OrderStatus.Cancelled);
console.log(order2.status);
