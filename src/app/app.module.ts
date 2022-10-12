import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SuscriptorServiceService } from './services/suscriptorService/suscriptor-service.service';
import { ItemCarritoServiceService } from './services/itemCarritoService/item-carrito-service.service';
import { CalzadoServiceService } from './services/calzadoService/calzado-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    SuscriptorServiceService,
    ItemCarritoServiceService,
    CalzadoServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
