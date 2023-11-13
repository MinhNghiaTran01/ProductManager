var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/products-test');

const router = require('./routers/client/index.route.js');

const schema = new mongoose.Schema({
  title: String,
  price: Number
});


const Products = mongoose.model('products', schema)

app.use( express.static("public"));

app.set("views","views");
app.set('view engine', 'pug');

router(app);



http.listen(3000, function() {
   console.log('listening on localhost:3000');
});