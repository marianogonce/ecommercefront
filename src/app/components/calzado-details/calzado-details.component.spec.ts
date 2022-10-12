import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalzadoDetailsComponent } from './calzado-details.component';

describe('CalzadoDetailsComponent', () => {
  let component: CalzadoDetailsComponent;
  let fixture: ComponentFixture<CalzadoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalzadoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalzadoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
