import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailsPgComponent } from './viewdetails-pg.component';

describe('ViewdetailsPgComponent', () => {
  let component: ViewdetailsPgComponent;
  let fixture: ComponentFixture<ViewdetailsPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewdetailsPgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdetailsPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
