import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPgComponent } from './view-pg.component';

describe('ViewPgComponent', () => {
  let component: ViewPgComponent;
  let fixture: ComponentFixture<ViewPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
