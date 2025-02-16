// server.js (güncellenmiş)

const express = require("express");
const cors = require("cors");
const sseRoutes = require("./sse/sse-routes"); // <-- Ekledik

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Wealth Management Uygulaması API");
});

// SSE Routes'i kullan
app.use("/sse", sseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor. Port: ${PORT}`);
});
