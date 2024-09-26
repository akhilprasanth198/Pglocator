import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgownerRegisterComponent } from './pgowner-register.component';

describe('PgownerRegisterComponent', () => {
  let component: PgownerRegisterComponent;
  let fixture: ComponentFixture<PgownerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgownerRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgownerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
