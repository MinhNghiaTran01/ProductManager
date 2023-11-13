const productRouter = require('./products.route.js')
const homeController = require("../../controllers/client/home.controller.js")
module.exports = (app) =>{
  // app.get('/', async (req, res) => {
  //   const products = await Products.find({});
  //   console.log(products[0]); 
  //    res.render('client/pages/home/index.pug',{
  //      products: products
  //    });
  // });
  app.get('/',  homeController.index);

  app.use('/products',productRouter)
} 