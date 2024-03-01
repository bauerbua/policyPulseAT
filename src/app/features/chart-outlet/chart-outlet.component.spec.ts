import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOutletComponent } from './chart-outlet.component';

describe('ChartOutletComponent', () => {
  let component: ChartOutletComponent;
  let fixture: ComponentFixture<ChartOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartOutletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
