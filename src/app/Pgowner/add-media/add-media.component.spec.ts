import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgMediaComponent } from './add-media.component';

describe('AddMediaComponent', () => {
  let component: PgMediaComponent;
  let fixture: ComponentFixture<PgMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
