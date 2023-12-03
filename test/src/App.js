import  Reaact , {useState} from 'react';

const InvoiceCalculator = () => {
const [quantity , setQuantity] = useState(0);
const [price , setPrice] = useState(0);
const [total , setTotal] = useState(0);

const handleQualityChange = (event) => {
const  newQuantity = parseInt(event.target.value, 10)  || 0;
setQuantity(newQuantity);
setTotal(setTotal, price);
};

const handlePriceChange = (event) =>{
  const newPrice = parsFloat(event.target.value)  || 0;
setPrice(newPrice);
updateTotal(quantity, newPrice);
};

const updateTotal = (newQuantity, newPrice) =>{
const newTotal = (newQuantity * newPrice)
setTotal(newTotal);
};
return(
  <div>
    <h1>Invoice Calculator</h1>
    <lable>Quantity</lable>
    <input type='number' value={price} onChange={handleQualityChange}/>
    <lable>Cost Price</lable>
    <input type='number' value={price} onChange={handlePriceChange}/>
    <lable>Margin %</lable>
    <input type='number' value={Number} onChange={updateTotal}/>
    <lable>Discount %</lable>
    <input type='number' value={Number} onChange={updateTotal}/>
    <lable>Tax %</lable>
    <input type='number' value={Number} onChange={updateTotal}/>
    <button>Submit</button>
  </div>
)
}
<table>
  <body>
    
  </body>
</table>


// import React from 'react';
// function App() {
//   

export default App;
