import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApprovedpgComponent } from './view-approvedpg.component';

describe('ViewApprovedpgComponent', () => {
  let component: ViewApprovedpgComponent;
  let fixture: ComponentFixture<ViewApprovedpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewApprovedpgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewApprovedpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
