import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBannedUserComponent } from './view-banned-user.component';

describe('ViewBannedUserComponent', () => {
  let component: ViewBannedUserComponent;
  let fixture: ComponentFixture<ViewBannedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBannedUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBannedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
