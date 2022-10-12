import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-calzado',
  templateUrl: './card-calzado.component.html',
  styleUrls: ['./card-calzado.component.css'],
})
export class CardCalzadoComponent implements OnInit {
  @Input() calzado: any;

  constructor() {}

  ngOnInit(): void {}
}
