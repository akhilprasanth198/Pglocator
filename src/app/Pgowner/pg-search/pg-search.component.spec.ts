import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgSearchComponent } from './pg-search.component';

describe('PgSearchComponent', () => {
  let component: PgSearchComponent;
  let fixture: ComponentFixture<PgSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
