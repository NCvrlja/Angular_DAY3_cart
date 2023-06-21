import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsDetailsComponent } from './cats-details.component';

describe('CatsDetailsComponent', () => {
  let component: CatsDetailsComponent;
  let fixture: ComponentFixture<CatsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatsDetailsComponent]
    });
    fixture = TestBed.createComponent(CatsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
