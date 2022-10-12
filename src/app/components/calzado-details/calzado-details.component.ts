import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CalzadoServiceService } from 'src/app/services/calzadoService/calzado-service.service';
import { formatterPeso } from '../utils/formatoPeso';

@Component({
  selector: 'app-calzado-details',
  templateUrl: './calzado-details.component.html',
  styleUrls: ['./calzado-details.component.css'],
})
export class CalzadoDetailsComponent implements OnInit {
  public codigoCalzadoSeleccionado: any;
  public calzado: any;
  public calzadosArray: any;
  public PageLoading: string = 'visible';
  public urlFotoPrincipal!: string;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private calzadoService: CalzadoServiceService
  ) {}

  cambiarFoto(url: string) {
    this.urlFotoPrincipal = url;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
        if (param.get('codigoCalzado')) {
          this.codigoCalzadoSeleccionado = param.get('codigoCalzado');
        }
      },
    });

    this.calzadoService.getAll().subscribe({
      next: (response: any) => {
        this.PageLoading = 'hidden';
        this.calzadosArray = response;
        this.calzado =
          this.calzadosArray[
            this.calzadosArray
              .map((e: any) => e.codigo_producto)
              .indexOf(this.codigoCalzadoSeleccionado)
          ];

        if (!this.calzado) {
          this.router.navigate(['/notfound']);
        }
        this.urlFotoPrincipal = this.calzado.fotos[0].foto_url;
        this.calzado.precio = formatterPeso.format(this.calzado.precio);
      },
      error: (error: any) => {
        this.router.navigate([
          `error/${error.error.status}/${error?.error?.error}`,
        ]);
      },
    });
  }
}
