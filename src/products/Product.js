const db = require('../database/firebase-config');
const { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, getDoc } = require('firebase/firestore');

const productCollection = collection(db, 'products');

module.exports = {
  async getAll() {
    const snapshot = await getDocs(productCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  async create(data) {
    const docRef = await addDoc(productCollection, data);
    return docRef.id;
  },
  async delete(id) {
    await deleteDoc(doc(db, 'products', id));
  },
  async update(id, data) {
    await updateDoc(doc(db, 'products', id), data);
  },
  async findById(id) {
    const docSnap = await getDoc(doc(db, 'products', id));
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  }
};



// const Sequelize = require('sequelize')
// const connection = require('../database/database')


// const Product = connection.define('products', {
//   name:{
//     type: Sequelize.STRING,
//     allowNull:false
//   },
//   slug:{
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   description:{
//     type: Sequelize.TEXT,
//     allowNull:false
//   },
//   price:{
//     type: Sequelize.FLOAT,
//     allowNull:false
//   },
//   image: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
// })


// // Product.sync({force:true})

// module.exports = Product;