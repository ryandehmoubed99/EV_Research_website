import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFirebaseDataComponent } from './display-firebase-data.component';

describe('DisplayFirebaseDataComponent', () => {
  let component: DisplayFirebaseDataComponent;
  let fixture: ComponentFixture<DisplayFirebaseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFirebaseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFirebaseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
