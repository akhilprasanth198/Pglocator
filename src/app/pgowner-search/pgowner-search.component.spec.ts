import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgownerSearchComponent } from './pgowner-search.component';

describe('PgownerSearchComponent', () => {
  let component: PgownerSearchComponent;
  let fixture: ComponentFixture<PgownerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgownerSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgownerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
