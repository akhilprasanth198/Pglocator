import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPgownerComponent } from './media-pgowner.component';

describe('MediaPgownerComponent', () => {
  let component: MediaPgownerComponent;
  let fixture: ComponentFixture<MediaPgownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPgownerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaPgownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
