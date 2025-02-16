# Wealth Management: SSE & WebSocket Örnek Uygulaması

Bu proje, **Node.js** üzerinde **Server-Sent Events (SSE)** ve **WebSocket** teknolojilerini kullanarak finansal verilerin (ör: Top10AsNasdaq, Top10AsBorsaIstanbul) anlık olarak güncellenmesi ve **Angular** frontend ile gösterilmesi amacıyla oluşturulmuş bir örnek uygulamadır.

## İçindekiler

- [Proje Hakkında](#proje-hakkında)
- [Teknolojiler](#teknolojiler)
- [Klasör Yapısı](#klasör-yapısı)
- [Kurulum ve Çalıştırma](#kurulum-ve-çalıştırma)
  - [Backend (BE) Kurulumu](#backend-be-kurulumu)
  - [Frontend (FE) Kurulumu](#frontend-fe-kurulumu)
- [API Endpoint’leri](#api-endpointleri)
- [Ekran Görüntüleri](#ekran-görüntüleri)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)

---

## Proje Hakkında

Finansal varlık yönetimi (Wealth Management) senaryosu için bir **Dashboard** uygulaması örneğidir. İki tip canlı veri iletişimi demonstrasyonu içerir:

1. **Server-Sent Events (SSE)**: Tek yönlü veri akışıdır.  
   - Her birkaç saniyede bir **Top 10 Nasdaq** ve **Top 10 Borsa İstanbul** verisi sunucudan istemciye akmaktadır.

2. **WebSocket**: Çift yönlü iletişim sağlar.  
   - Rastgele finans verileri (ör: fiyat ve zaman damgası) WebSocket üzerinden istemciye gönderilir.

Ön yüzde (Angular) iki sayfa bulunmaktadır:  
- **SSE Sayfası**: Gerçek zamanlı tabloyu SSE ile besler.  
- **WS Sayfası**: WebSocket üzerinden gelen verileri gösterir.

---

## Teknolojiler

- **Node.js** (>= 16.20.2)
  - [Express](https://expressjs.com/)
  - [ws](https://github.com/websockets/ws)
  - Diğer yardımcı paketler (ör. cors, vs.)
- **Angular** (16.x)
- **TypeScript** (Backend ve Frontend)

---

## Klasör Yapısı

Aşağıdaki klasör yapısı, proje kök dizinini ve alt klasörlerini gösterir:

```plaintext
WEALTH-MANAGEMENT/
├─ be
│   ├─ sse/
│   │   └─ sse-routes.js
│   ├─ ws/
│   │   └─ ws-server.js
│   ├─ package.json
│   └─ server.js         # Express app (SSE ve diğer API'ler)
├─ fe
│   └─ src/
│       └─ app/
│         └─ pages/
│           ├─ sse-page
│           └─ ws-page
└─ README.md
```
## Kurulum ve Çalıştırma

### Backend (BE) Kurulumu

1. **Node.js sürümünüzü** doğrulayın (>=16.20.2):
   ```bash
   node -v
   ```
2. **Backend** klasörüne geçin (örneğin be adlı klasör):
   ```bash
   cd be
   npm install
    ```
3. **SSE ve Express uygulamasını** çalıştırmak için (scripts içinde start veya farklı bir komut tanımlanmış olabilir):
    ```bash
   npm run start
    ```
    Varsayılan olarak http://localhost:3000 adresinden erişilebilir.

4. WebSocket sunucusunu farklı bir terminalde çalıştırın (scripts’e bağlı olarak):
    ```bash
    npm run start-ws
    ```
    Varsayılan olarak ws://localhost:8080 adresinde dinler.


### Frontend (FE) Kurulumu

1. **Frontend** klasörüne geçin (örneğin fe):
   ```bash
    cd ../fe
    npm install
   ```
2. Angular CLI (16 veya üstü) yüklüyse:
   ```bash
    npm start
    ```
