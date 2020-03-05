import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnIndicatorComponent } from './sn-indicator.component';

describe('SnIndicatorComponent', () => {
  let component: SnIndicatorComponent;
  let fixture: ComponentFixture<SnIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
