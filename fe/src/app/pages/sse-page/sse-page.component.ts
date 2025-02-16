import { Component, NgZone, OnInit } from "@angular/core";

@Component({
  selector: "app-sse-page",
  templateUrl: "./sse-page.component.html",
  styleUrls: ["./sse-page.component.scss"],
})
export class SsePageComponent implements OnInit {
  nasdaqData: any[] = [];
  bistData: any[] = [];

  // SSE EventSource referansları
  private nasdaqEventSource!: EventSource;
  private bistEventSource!: EventSource;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    // NASDAQ veri kaynağı
    this.nasdaqEventSource = new EventSource(
      "http://localhost:3000/sse/nasdaq"
    );
    this.nasdaqEventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("nasdaq", data);

      this.ngZone.run(() => {
        this.nasdaqData = data;
      });
    };

    // Borsa İstanbul veri kaynağı
    this.bistEventSource = new EventSource(
      "http://localhost:3000/sse/borsa-istanbul"
    );
    this.bistEventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("borsa-istanbul", data);

      this.ngZone.run(() => {
        this.bistData = data;
      });
    };
  }

  ngOnDestroy(): void {
    // Bileşen yok olurken SSE bağlantılarını kapatıyoruz
    this.nasdaqEventSource?.close();
    this.bistEventSource?.close();
  }
}
