import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgNavbarComponent } from './pg-navbar.component';

describe('PgNavbarComponent', () => {
  let component: PgNavbarComponent;
  let fixture: ComponentFixture<PgNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
