import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApprovedownerComponent } from './view-approvedowner.component';

describe('ViewApprovedownerComponent', () => {
  let component: ViewApprovedownerComponent;
  let fixture: ComponentFixture<ViewApprovedownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewApprovedownerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewApprovedownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
