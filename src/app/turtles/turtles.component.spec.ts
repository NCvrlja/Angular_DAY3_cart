import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtlesComponent } from './turtles.component';

describe('TurtlesComponent', () => {
  let component: TurtlesComponent;
  let fixture: ComponentFixture<TurtlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurtlesComponent]
    });
    fixture = TestBed.createComponent(TurtlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
