const express = require('express');
const mongoose = require('mongoose');
const pageRouther = require('./routes/PageRouthe');
const productRouther = require('./routes/productRouther');
const PCRouther = require('./routes/productCategoryRouthe'); 
const SubRouther = require('./routes/productSubcategory');
//Mongose Connection Code
mongoose.connect('mongodb://localhost/mkstudio-test',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Mongo - DB Connection');
})

//using 
const app = express();

//Tamplate Engine Importlama
app.set('view engine','ejs');

//Middlewares
app.use(express.static(__dirname+'/public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/',pageRouther);
// app.use('/magaza',productRouther);
app.use('/urunler',PCRouther);
app.use('/subcategories',SubRouther);

app.get('*', (req,res) =>{
    res.status(404).render('404',{
        page_name:'404'
    })
});
const port = process.env.PORT || 80; 
app.listen(port,()=>{
    console.log(`Localhost -> ${port}`);
})