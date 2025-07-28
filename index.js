const express=require('express');
const bodyParser=require('body-parser');;
const path=require('path');

const productsRoute=require('./routes/productRoute.js');

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/products',productsRoute);
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.redirect('/products');
})

const port=5000;

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})
