import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-ws-page",
  templateUrl: "./ws-page.component.html",
  styleUrls: ["./ws-page.component.scss"],
})
export class WsPageComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  private ws!: WebSocket;

  ngOnInit(): void {
    // ws-server.js 8080 portunda çalışıyor varsayıyoruz
    this.ws = new WebSocket("ws://localhost:8080");

    this.ws.onopen = () => {
      console.log("WebSocket bağlantısı kuruldu");
    };

    this.ws.onmessage = (event) => {
      // Sunucudan gelen JSON veriyi parse edelim
      const data = JSON.parse(event.data);
      this.messages.unshift(data); // Liste başına ekleyelim
    };

    this.ws.onclose = () => {
      console.log("WebSocket bağlantısı kapandı");
    };
  }

  ngOnDestroy(): void {
    // Bileşen yok olurken bağlantıyı kapat
    this.ws?.close();
  }
}
