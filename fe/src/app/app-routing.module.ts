import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SsePageComponent } from "./pages/sse-page/sse-page.component";
import { WsPageComponent } from "./pages/ws-page/ws-page.component";

const routes: Routes = [
  { path: "sse", component: SsePageComponent },
  { path: "ws", component: WsPageComponent },
  { path: "", redirectTo: "/sse", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
