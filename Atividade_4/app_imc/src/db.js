import mongoose from "mongoose";

// Conecte-se ao MongoDB
mongoose.connect('mongodb://localhost:27017/db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida com sucesso");
  })
  .catch((error) => {
    console.error("Erro na conexão com o MongoDB:", error);
  });