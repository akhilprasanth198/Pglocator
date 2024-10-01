import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgownerNavbarComponent } from './pgowner-navbar.component';

describe('PgownerNavbarComponent', () => {
  let component: PgownerNavbarComponent;
  let fixture: ComponentFixture<PgownerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgownerNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgownerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
