import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmsearchComponent } from './frmsearch.component';

describe('FrmsearchComponent', () => {
  let component: FrmsearchComponent;
  let fixture: ComponentFixture<FrmsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
