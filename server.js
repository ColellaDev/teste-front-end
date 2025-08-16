import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000; 

app.use(cors());

app.get("/produtos", async (req, res) => {
  try {
    const response = await fetch("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json");
    const data = await response.json();
    res.json(data); 
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:${PORT}`);
});