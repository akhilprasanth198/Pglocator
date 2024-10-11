import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsPgUserComponent } from './view-details-pg-user.component';

describe('ViewDetailsPgUserComponent', () => {
  let component: ViewDetailsPgUserComponent;
  let fixture: ComponentFixture<ViewDetailsPgUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDetailsPgUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetailsPgUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
