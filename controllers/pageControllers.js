const userIN = require('/app'); 
//Ana Sayfa İşlemleri 
exports.getHomePage = (req,res) => {
    res.status(200).render('homePage',{
        page_name:"home",
        userIN
    })
}
//Satış Sayfası İşlemleri  
exports.getShopPage = (req,res) => {
    res.status(200).render('ProductPage',{
        page_name: "shop",
        userIN
    })
}
//Tekil Ürün Listeleme
exports.getProductSinglePage = (req,res) =>{
    res.status(200).render('ProductSinglePage',{
        page_name:'ProductSingle',
        userIN
    })
}
//Ödeme Sayfası
exports.getPaymentPage = (req,res) =>{
    res.status(200).render('paymentPage',{
        page_name:'paymentPage',
        userIN
    })
}
//İletişim Sayfası 
exports.getContactPage = (req,res) =>{
    res.status(200).render('contact-us',{
        userIN,
        page_name:'contact'
    })
}
//Blog Sayfası
exports.getBlogPage = (req,res) =>{
    res.status(200).render('blog',{
        userIN,
        page_name:'blog'
    })
}
//Hakkımızda Sayfası
exports.getaboutPage = (req,res) =>{
    res.status(200).render('about-us',{
        userIN,
        page_name:'aboutUs'
    })
}
//Hakkımızda Sayfası
exports.Page404 = (req,res) =>{
    res.status(200).render('404',{
        userIN,
        page_name:'404'
    })
}
