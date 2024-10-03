import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgsearchComponent } from './pgsearch.component';

describe('PgsearchComponent', () => {
  let component: PgsearchComponent;
  let fixture: ComponentFixture<PgsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgsearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
