const multer = require("multer");
const path = require('path');
const fs = require('fs');
const uploadDir = path.join(__dirname, '../upload');  // Caminho absoluto para a pasta de uploads

// Verificar se a pasta de uploads existe, se não, cria
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    // Definir o caminho absoluto para a pasta de upload
    cb(null, uploadDir);
  },
  filename: function(req, file, cb) {
    // Definir o nome do arquivo com um timestamp para garantir unicidade
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

module.exports = upload;
