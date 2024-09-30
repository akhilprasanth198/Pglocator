import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerActionComponent } from './owner-action.component';

describe('OwnerActionComponent', () => {
  let component: OwnerActionComponent;
  let fixture: ComponentFixture<OwnerActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
