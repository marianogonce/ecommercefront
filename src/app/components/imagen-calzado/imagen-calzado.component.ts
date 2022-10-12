import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagen-calzado',
  templateUrl: './imagen-calzado.component.html',
  styleUrls: ['./imagen-calzado.component.css'],
})
export class ImagenCalzadoComponent implements OnInit {
  @Input() calzado: any;

  public urlFotoPrincipal!: string;

  cambiarFoto(url: string, color: any) {
    this.urlFotoPrincipal = url;
  }

  constructor() {}

  ngOnInit(): void {
    this.urlFotoPrincipal = this.calzado.fotos[0].foto_url;
  }
}
