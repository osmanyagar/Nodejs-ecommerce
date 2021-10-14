//Kütüphaneler
const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

//Yönlendirmeler
const pageRouther = require('./routes/PageRouthe');
const Categorys = require('./routes/productCategoryRouthe'); 
const PostRouther = require('./routes/categoryPostRouthe'); 




// Mongoose Test Network Connect Code
mongoose.connect('mongodb+srv://osman2:Cafw0gUiHTazwFr9@cluster0.aazzx.mongodb.net/mkstduio-2test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Mongo - DB Connection');
})

//Mongose Locale DB Connect
// mongoose.connect('mongodb://localhost/mk-studiotest2',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log('Mongo - DB Connection');
// })


//using 
const app = express();
// app.use(express.static('public'));
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
app.use(fileUpload());

//Tamplate Engine Importlama
app.set('view engine','ejs');

//Middlewares -
app.use(express.static(__dirname+'/public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/',pageRouther);
// app.use('/magaza',productRouther);
app.use('/urunler',Categorys);
app.use('/post-req',PostRouther);



//Tekil Ürün Sayfası Deneme
app.get('/single',(req,res) =>{
    res.render('productSinglePage', {
        page_name:'subcategory'
    });
   
});

app.get('*', (req,res) =>{
    res.status(404).render('404',{
        page_name:'404'
    })
});

const port = process.env.PORT || 80; 
app.listen(port,()=>{
    console.log(`Localhost -> ${port}`);
})