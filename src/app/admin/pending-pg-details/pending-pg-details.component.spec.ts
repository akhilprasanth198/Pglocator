import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPgDetailsComponent } from './pending-pg-details.component';

describe('PendingPgDetailsComponent', () => {
  let component: PendingPgDetailsComponent;
  let fixture: ComponentFixture<PendingPgDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingPgDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingPgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
