const express = require("express");
const router = express.Router();

// Fake veri üretimi için örnek
function getRandomStocks(marketName) {
  const stocks = [];
  for (let i = 0; i < 10; i++) {
    stocks.push({
      symbol: `${marketName}-SYM${i}`,
      price: (Math.random() * 100).toFixed(2),
      volume: Math.floor(Math.random() * 10000),
    });
  }
  return stocks;
}

// SSE endpoint'i
router.get("/nasdaq", (req, res) => {
  // Header'ları SSE'ye uygun şekilde ayarla
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Her 5 saniyede bir veri gönder
  const intervalId = setInterval(() => {
    const data = getRandomStocks("NASDAQ");
    // SSE formatına uygun olarak 'data:' kullanıyoruz
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 5000);

  // İstemci bağlantısı koptuğunda interval'i temizleyelim
  req.on("close", () => {
    clearInterval(intervalId);
    res.end();
  });
});

// Başka bir SSE örneği de Borsa İstanbul için
router.get("/borsa-istanbul", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const intervalId = setInterval(() => {
    const data = getRandomStocks("BIST");
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 5000);

  req.on("close", () => {
    clearInterval(intervalId);
    res.end();
  });
});

module.exports = router;
