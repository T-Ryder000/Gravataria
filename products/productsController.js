const express = require('express');
const router = express.Router();
const Product = require('./Product');
const slugify = require('slugify');
const upload = require('../middlewares/storage');  // Middleware para upload de arquivos

// const { verifyToken } = require('./middlewares/verifyToken');  // Middleware de verificação de token

// Listar produtos (só pode acessar quem está autenticado)
router.get('/admin/products', async (req, res) => {
  const products = await Product.getAll();  // Supondo que o método getAll retorne os produtos
  res.render('admin/product/index', { products });
});

// Criar novo produto (exibe o formulário)
router.get('/admin/products/new', (req, res) => {
  res.render('admin/product/new');
});

// Criar novo produto
router.post('/products/save', upload.single('image'), async (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file ? req.file.filename : null;  // Se houver imagem, usa o nome do arquivo

  if (name && description && price) {
    await Product.create({
      name,
      slug: slugify(name),
      description,
      price: parseFloat(price),
      image
    });
    res.redirect('/admin/products');  // Redireciona para a lista de produtos
  } else {
    res.redirect('/admin/products/new');  // Caso falte dados, redireciona para a criação
  }
});

// Editar produto
router.get('/admin/products/edit/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);  // Busca o produto pelo ID
  if (product) {
    res.render('admin/product/edit', { product });
  } else {
    res.redirect('/admin/products');
  }
});

// Atualizar produto
router.post('/products/update', upload.single('image'), async (req, res) => {
  const { id, name, description, price, image: oldImage } = req.body;
  const image = req.file ? req.file.filename : oldImage;  // Se houver nova imagem, usa a nova, caso contrário, mantém a antiga

  await Product.update(id, {
    name,
    slug: slugify(name),
    description,
    price: parseFloat(price),
    image
  });
  res.redirect('/admin/products');  // Redireciona após atualização
});

// Excluir produto
router.post('/products/delete', async (req, res) => {
  const { id } = req.body;
  if (id) {
    await Product.delete(id);  // Exclui o produto com o ID informado
  }
  res.redirect('/admin/products');  // Redireciona para a lista de produtos
});

module.exports = router;



// const express = require('express')
// const router = express.Router();

// const Product = require('./Product')
// const slugify = require('slugify')


// const upload = require('../middlewares/storage')
// const multer = require('multer')//upload de imagens



// router.get('/products', (req, res)=>{
//   res.send('Rota de produtos')
// });


// router.get('/admin/products/new', (req, res)=>{
//   res.render('admin/product/new')
// });

// router.get('/admin/products', (req, res)=>{
//   Product.findAll().then(products => {
//     res.render('admin/product/index', {products:products})
//   })

// });

// router.post('/products/save', upload.single('image'), (req, res)=>{
//   const name = req.body.name;
//   const description = req.body.description;
//   const price = req.body.price;
//   let image = req.file ? req.file.filename : null;

//   if (name && description && price){

//     Product.create({
//       name:name,
//       slug: slugify(name),
//       description:description,
//       price: price,
//       image: image,
//     }).then(()=>{
//       res.redirect('/admin/products')
//     })
//   }else{
//     res.redirect('/admin/products/new')
//   }
// });


// router.post('/products/delete', (req, res)=>{
//   let id = req.body.id;

//   if(id != undefined){
//       if(!isNaN(id)){
//         Product.destroy({
//           where:{
//             id:id
//           }
//         }).then(()=>{
//           res.redirect('/admin/products')
//         })
//       }else{
//         res.redirect('/admin/products')
//       }
//   }else{
//     res.redirect('/admin/products')
//   }
// });

// router.get('/admin/products/edit/:id', (req, res)=>{
//   let id = req.params.id

//   if (!id || isNaN(id)) {
//     return res.redirect('/admin/products');
//   }
  

//   Product.findByPk(id).then((product)=>{
//     if(product != undefined){
//       res.render('admin/product/edit', {product: product})
//     }else{
//       res.redirect('/admin/products')
//     }
//   }).catch(erro=>{
//     res.redirect('/admin/products')
//   })
// });


// router.post('/products/update', upload.single('image'), (req, res)=>{
//   let id = req.body.id
//   let name = req.body.name;
//   let description = req.body.description
//   let price = req.body.price

//   let image1 = req.file ? req.file.filename : null;
//   let image2 = req.body.image

//   let image;
//   if(image1 != null){
//     image = image1
//   }else{
//     image = image2
//   }

//   Product.update({name:name, slug:slugify(name), description:description, price:price, image: image,}, {
//     where:{
//       id:id
//     }
//   }).then(()=>{
//     res.redirect('/admin/products')
//   })
// })


// module.exports = router;