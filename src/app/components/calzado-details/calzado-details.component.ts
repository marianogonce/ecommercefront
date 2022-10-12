import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CalzadoServiceService } from 'src/app/services/calzadoService/calzado-service.service';
import { formatterPeso } from '../utils/formatoPeso';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemCarritoServiceService } from 'src/app/services/itemCarritoService/item-carrito-service.service';
import { openSnackBar } from '../utils/OpenSnackbarfunction';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-calzado-details',
  templateUrl: './calzado-details.component.html',
  styleUrls: ['./calzado-details.component.css'],
})
export class CalzadoDetailsComponent implements OnInit {
  public myForm!: FormGroup;

  public codigoCalzadoSeleccionado: any;
  public calzado: any;
  public calzadosArray: any;
  public PageLoading: string = 'visible';

  public tallaSeleccionada: any = '';
  public colorSeleccionado: any = '';
  public cantidad: Number = 0;

  public precioEnPesos: string = '';

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private calzadoService: CalzadoServiceService,
    private itemCarritoService: ItemCarritoServiceService,
    private _snackBar: MatSnackBar
  ) {}

  elegirTalla(talla: any) {
    this.tallaSeleccionada = talla;
  }

  onSubmit(form: FormGroup) {
    if (this.myForm.valid && this.tallaSeleccionada != '') {
      console.log({
        calzado: this.calzado,
        color: this.colorSeleccionado.color,
        talla: this.tallaSeleccionada,
        cantidad: parseInt(this.myForm.get('cantidad')!.value),
      });
      this.calzado.cantidad_ventas = parseInt(this.calzado.cantidad_ventas);
      this.itemCarritoService
        .create({
          calzado: this.calzado,
          color: this.colorSeleccionado.color,
          talla: this.tallaSeleccionada,
          cantidad: parseInt(this.myForm.get('cantidad')!.value),
        })
        .subscribe({
          next: (response) => {
            openSnackBar(
              this._snackBar,
              'Producto Agregado al Carrito : ' + this.calzado.codigo_producto,
              'green-snackbar',
              'x'
            );
            this.myForm.reset();
            this.myForm.markAsUntouched();
          },
          error: (error: any) => {
            openSnackBar(
              this._snackBar,
              `${error?.message}`,
              'red-snackbar',
              'x'
            );
          },
        });
    } else {
      this.myForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      cantidad: new FormControl('cantidad', Validators.required),
    });

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

        this.precioEnPesos = formatterPeso.format(this.calzado.precio);
      },
      error: (error: any) => {
        this.router.navigate([
          `error/${error.error.status}/${error?.error?.error}`,
        ]);
      },
    });
  }
}
