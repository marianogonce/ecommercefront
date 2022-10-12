import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenCalzadoComponent } from './imagen-calzado.component';

describe('ImagenCalzadoComponent', () => {
  let component: ImagenCalzadoComponent;
  let fixture: ComponentFixture<ImagenCalzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenCalzadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenCalzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
