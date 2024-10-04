import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgownerSidebarComponent } from './pgowner-sidebar.component';

describe('PgownerSidebarComponent', () => {
  let component: PgownerSidebarComponent;
  let fixture: ComponentFixture<PgownerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgownerSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgownerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
