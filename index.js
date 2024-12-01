const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('static'));


app.get('/cart-total',(req,res) => {

  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  let tot = cartTotal+newItemPrice;
  res.send(tot.toString());
});

app.get('/membership-discount',(req,res) => {

  let carTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember==='true';
  let disc = 10 ;//here
  if(isMember){
    carTotal = carTotal*(100-disc)/100;
  }
  res.send(carTotal.toString());
});

//here
function getTax(cartTotal) => {

  return something.toString();
}
app.get('/calculate-tax',(req,res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  res.send(getTax(cartTotal));
});

function getTime(dist,s) =>{
  if(s=='standard'){
    return dist/50;
  }else{
    return dist/100;
  }
}
app.get('/estimate-delivery',(req,res) => {

  let shippingMethod = parseFloat(req.query.shippingMethod);
  let distance = parseFloat(req.query.distance);
  res.send(getTime(distance,shippingMethod).toString());
});

app.get('/shipping-cost',(req,res) => {

  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  res.send((weight*distance*0.1).toString());
});

app.get('/loyalty-points',(req,res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  res.send((2*purchaseAmount).toString());
});

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
