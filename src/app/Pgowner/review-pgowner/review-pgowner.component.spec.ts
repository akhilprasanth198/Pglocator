import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPgownerComponent } from './review-pgowner.component';

describe('ReviewPgownerComponent', () => {
  let component: ReviewPgownerComponent;
  let fixture: ComponentFixture<ReviewPgownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewPgownerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewPgownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
