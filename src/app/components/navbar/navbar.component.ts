import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ItemCarritoServiceService } from 'src/app/services/itemCarritoService/item-carrito-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('navBurger') navBurger!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;

  public itemsCarrito: any;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  constructor(private itemCarritoService: ItemCarritoServiceService) {}

  ngOnInit(): void {
    this.itemCarritoService.getAll().subscribe((response) => {
      this.itemsCarrito = response;
    });
  }
}
