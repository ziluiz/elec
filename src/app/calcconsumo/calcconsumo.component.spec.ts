import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcconsumoComponent } from './calcconsumo.component';

describe('CalcconsumoComponent', () => {
  let component: CalcconsumoComponent;
  let fixture: ComponentFixture<CalcconsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcconsumoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcconsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
