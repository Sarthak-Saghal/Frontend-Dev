let base = +prompt("Enter base food cost:");
let dineIn = prompt("Dining in? (yes/no)").toLowerCase() === "yes";

let gst = base * 0.05;
let serviceTax = dineIn ? base * 0.10 : 0;

let subtotal = base + gst + serviceTax;
let tip = subtotal > 2000 ? subtotal * 0.08 : 0;

let finalTotal = (subtotal + tip).toFixed(2);

console.log("Base Amount:", base);
console.log("GST (5%):", gst.toFixed(2));
console.log("Service Tax:", serviceTax.toFixed(2));
console.log("Tip:", tip.toFixed(2));
console.log("Final Total:", finalTotal);
