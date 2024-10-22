import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgdetailsComponent } from './pgdetails.component';

describe('PgdetailsComponent', () => {
  let component: PgdetailsComponent;
  let fixture: ComponentFixture<PgdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
