import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgsearchDashboardComponent } from './pgsearch-dashboard.component';

describe('PgsearchDashboardComponent', () => {
  let component: PgsearchDashboardComponent;
  let fixture: ComponentFixture<PgsearchDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgsearchDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgsearchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
