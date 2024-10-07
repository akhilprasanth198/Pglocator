import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActiveUserComponent } from './view-active-user.component';

describe('ViewActiveUserComponent', () => {
  let component: ViewActiveUserComponent;
  let fixture: ComponentFixture<ViewActiveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewActiveUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewActiveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
