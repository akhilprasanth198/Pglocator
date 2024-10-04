import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgownerDashboardComponent } from './pgowner-dashboard.component';

describe('PgownerDashboardComponent', () => {
  let component: PgownerDashboardComponent;
  let fixture: ComponentFixture<PgownerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgownerDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgownerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
