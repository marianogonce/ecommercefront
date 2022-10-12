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
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagenCalzadoComponent } from './components/imagen-calzado/imagen-calzado.component';
import { CardCalzadoComponent } from './components/card-calzado/card-calzado.component';
import { BotonCarritoComponent } from './components/boton-carrito/boton-carrito.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CalzadoDetailsComponent, ImagenCalzadoComponent, CardCalzadoComponent, BotonCarritoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'calzado/:codigoCalzado',
        component: CalzadoDetailsComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ]),
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [
    SuscriptorServiceService,
    ItemCarritoServiceService,
    CalzadoServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
