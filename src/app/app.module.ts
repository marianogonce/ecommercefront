import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SuscriptorServiceService } from './services/suscriptorService/suscriptor-service.service';
import { ItemCarritoServiceService } from './services/itemCarritoService/item-carrito-service.service';
import { CalzadoServiceService } from './services/calzadoService/calzado-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CalzadoDetailsComponent } from './components/calzado-details/calzado-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CalzadoDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'calzado/:codigoCalzado',
        component: CalzadoDetailsComponent,
      },
    ]),
  ],
  providers: [
    SuscriptorServiceService,
    ItemCarritoServiceService,
    CalzadoServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
