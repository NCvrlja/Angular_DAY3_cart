import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtlesDetailsComponent } from './turtles-details.component';

describe('TurtlesDetailsComponent', () => {
  let component: TurtlesDetailsComponent;
  let fixture: ComponentFixture<TurtlesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurtlesDetailsComponent]
    });
    fixture = TestBed.createComponent(TurtlesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
