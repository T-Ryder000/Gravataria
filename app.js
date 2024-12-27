const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require('multer'); // Upload de imagens
const productsController = require('./products/productsController');
const Product = require('./products/Product'); // Adaptado para usar Firebase

// View engine
app.set('view engine', 'ejs');

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static
app.use(express.static('public'));
app.use(express.static('upload'));

// Firebase não requer autenticação de conexão explícita
console.log('Conexão com o Firebase configurada com sucesso!');

// Rotas
app.use('/', productsController);

app.get("/", async (req, res) => {
  const products = await Product.getAll(); // Adaptado para buscar dados do Firebase
  res.render('index', { products });
});



// Inicializar servidor
app.listen(8080, () => {
  console.log("Servidor rodando!");
});


// const express = require("express")
// const app = express()
// const bodyParser = require("body-parser")
// const connection = require('./database/database')
// const multer = require('multer')//upload de imagens
// const productsController = require('./products/productsController')
// const Product = require('./products/Product')

// //view engine
// app.set('view engine','ejs')

// //body-parser
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

// //static
// app.use(express.static('public'))
// app.use(express.static('upload'));

// //database
// connection.authenticate()
// .then(()=>{
//   console.log('Conexao realizada com sucesso!')
// }).catch((error)=>{
//   console.log(error)
// })

// app.use('/', productsController)

// app.get("/", (req, res)=>{
//   Product.findAll().then(products => {
//     res.render('index', {products:products})
//   })
// })



// app.listen(8080, ()=>{
//   console.log("Servidor rodando!")
// })