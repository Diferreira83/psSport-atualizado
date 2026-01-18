
const express = require('express');
const cors = require('cors');
require('dotenv').config(); 


const atletasRoutes = require('./routes/atletasRoutes');


const app = express();


app.use(cors()); 
app.use(express.json()); 


app.use('/atletas', atletasRoutes);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
