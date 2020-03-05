import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnIndicatorChildComponent } from './sn-indicator-child.component';

describe('SnIndicatorChildComponent', () => {
  let component: SnIndicatorChildComponent;
  let fixture: ComponentFixture<SnIndicatorChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnIndicatorChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnIndicatorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
