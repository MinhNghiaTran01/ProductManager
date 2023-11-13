const productRouter = require('./products.route.js')
module.exports = (app) =>{
  // app.get('/', async (req, res) => {
  //   const products = await Products.find({});
  //   console.log(products[0]); 
  //    res.render('client/pages/home/index.pug',{
  //      products: products
  //    });
  // });
  app.get('/',  (req, res) => {
      console.log("hello world!");
  });

  app.use('/products',productRouter)
}