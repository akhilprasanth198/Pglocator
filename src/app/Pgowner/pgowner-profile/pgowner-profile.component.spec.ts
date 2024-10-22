import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgownerProfileComponent } from './pgowner-profile.component';

describe('PgownerProfileComponent', () => {
  let component: PgownerProfileComponent;
  let fixture: ComponentFixture<PgownerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgownerProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgownerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
