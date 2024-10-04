import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgownerTopbarComponent } from './pgowner-topbar.component';

describe('PgownerTopbarComponent', () => {
  let component: PgownerTopbarComponent;
  let fixture: ComponentFixture<PgownerTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgownerTopbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgownerTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
