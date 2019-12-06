import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomInputComponent } from './bottom-input.component';

describe('BottomInputComponent', () => {
  let component: BottomInputComponent;
  let fixture: ComponentFixture<BottomInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
