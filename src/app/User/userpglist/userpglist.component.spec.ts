import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpglistComponent } from './userpglist.component';

describe('UserpglistComponent', () => {
  let component: UserpglistComponent;
  let fixture: ComponentFixture<UserpglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserpglistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
