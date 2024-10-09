import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPendingPgComponent } from './view-pending-pg.component';

describe('ViewPendingPgComponent', () => {
  let component: ViewPendingPgComponent;
  let fixture: ComponentFixture<ViewPendingPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPendingPgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPendingPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
