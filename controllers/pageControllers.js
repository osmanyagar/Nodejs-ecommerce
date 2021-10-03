//Ana Sayfa İşlemleri 
exports.getHomePage = (req,res) => {
    res.status(200).render('homePage',{
        page_name:"home"
    })
}
//Satış Sayfası İşlemleri  
exports.getShopPage = (req,res) => {
    res.status(200).render('ProductPage',{
        page_name: "shop"
    })
}
//Tekil Ürün Listeleme
exports.getProductSinglePage = (req,res) =>{
    res.status(200).render('ProductSinglePage',{
        page_name:'ProductSingle'
    })
}
//Ödeme Sayfası
exports.getPaymentPage = (req,res) =>{
    res.status(200).render('paymentPage',{
        page_name:'paymentPage'
    })
}
//İletişim Sayfası 
exports.getContactPage = (req,res) =>{
    res.status(200).render('contact-us',{
        page_name:'contact'
    })
}
//Blog Sayfası
exports.getBlogPage = (req,res) =>{
    res.status(200).render('blog',{
        page_name:'blog'
    })
}
//Hakkımızda Sayfası
exports.getaboutPage = (req,res) =>{
    res.status(200).render('about-us',{
        page_name:'aboutUs'
    })
}
//Hakkımızda Sayfası
exports.Page404 = (req,res) =>{
    res.status(200).render('404',{
        page_name:'404'
    })
}