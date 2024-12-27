// const admin = require('../database/firebase-config');  

// const verifyToken = async (req, res, next) => {
//   const token = req.headers.authorization?.split('Bearer ')[1];

//   if (!token) {
//     return res.status(401).send('Token não fornecido');
//   }

//   try {
//     // Verificando o ID token usando Firebase Admin SDK
//     const decodedToken = await admin.auth().verifyIdToken(token); // Verifica o token
//     req.user = decodedToken;  // Armazenando o usuário autenticado na requisição
//     next();  // Continuar com a requisição
//   } catch (error) {
//     console.error('Erro ao verificar token:', error);
//     return res.status(401).send('Token inválido');
//   }
// };

// module.exports = { verifyToken };
