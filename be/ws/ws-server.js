const { WebSocketServer } = require("ws");
const crypto = require("crypto");

// Portu sabit tanımlayabilir veya config'den alabilirsiniz
const WS_PORT = 8080;

const wss = new WebSocketServer({ port: WS_PORT }, () => {
  console.log(`WebSocket sunucusu ${WS_PORT} portunda çalışıyor`);
});

// Bağlanan her client için event
wss.on("connection", (ws) => {
  console.log("Yeni bir WebSocket istemcisi bağlandı.");

  // İstemciden mesaj geldiğinde çalışır
  ws.on("message", (message) => {
    console.log("Gelen mesaj:", message.toString());
    // İsterseniz gelen mesajı diğer istemcilere dağıtabilirsiniz
  });

  // Her 5 saniyede bir rastgele veri yollayalım
  const intervalId = setInterval(() => {
    const data = {
      id: crypto.randomUUID(),
      price: (Math.random() * 100).toFixed(2),
      timestamp: new Date().toISOString(),
    };
    ws.send(JSON.stringify(data));
  }, 5000);

  // Bağlantı kapandığında interval'i temizle
  ws.on("close", () => {
    console.log("WebSocket istemcisi bağlantıyı kapattı.");
    clearInterval(intervalId);
  });
});
